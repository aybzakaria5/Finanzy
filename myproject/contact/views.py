"""this is the views.py file for the contact app"""
from django.shortcuts import render
from .forms import ContactForm

def contact_view(request):
    """ a view that handel the contact form"""
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Process the form data
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            # Do something with the data, e.g., send an email
            # For now, we'll just render a success page
            return render(request, 'contact_success.html', {'name': name})
    else:
        form = ContactForm()
    return render(request, 'contact.html', {'form': form})
