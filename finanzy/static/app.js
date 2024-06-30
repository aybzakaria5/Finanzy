strationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userRole = document.getElementById('userRole').value;

    fetch('/api/users/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: fullName,
            email: email,
            password: password,
            role: userRole
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Registration Successful:', data);
        alert('User registered successfully!');
        event.target.reset();
    })
    .catch(error => console.error('Error:', error));
});

// Function to handle hire purchase form submission
document.getElementById('hirePurchaseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const product = document.getElementById('product').value;
    const duration = document.getElementById('duration').value;

    fetch('/api/contracts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            product: product,
            duration: duration,
            customer: 1 // Example customer ID, update this as needed
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Hire Purchase Form Submitted', data);
        alert('Hire purchase application submitted!');
        event.target.reset();
    })
    .catch(error => console.error('Error:', error));
});

// Function to dynamically update content based on user role
function updateDashboard(role) {
    const merchantDashboard = document.getElementById('merchant-dashboard');
    const customerDashboard = document.getElementById('customer-dashboard');

    if (role === 'merchant') {
        merchantDashboard.style.display = 'block';
        customerDashboard.style.display = 'none';
    } else if (role === 'customer') {
        merchantDashboard.style.display = 'none';
        customerDashboard.style.display = 'block';
    }
}

// Example of dynamic content update
document.getElementById('userRole').addEventListener('change', function(event) {
    const role = event.target.value;
    updateDashboard(role);
});

// Initial setup to hide dashboards
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('merchant-dashboard').style.display = 'none';
    document.getElementById('customer-dashboard').style.display = 'none';
    
    // Fetch products and populate the product dropdown
    fetch('/api/products/')
    .then(response => response.json())
    .then(data => {
        const productSelect = document.getElementById('product');
        data.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    })
    .catch(error => console.error('Error:', error));
});

