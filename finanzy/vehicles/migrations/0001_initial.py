# Generated by Django 3.2.4 on 2024-07-04 18:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('make', models.CharField(max_length=50)),
                ('model', models.CharField(max_length=50)),
                ('year', models.IntegerField()),
                ('vin', models.CharField(max_length=17, unique=True)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('available', models.BooleanField(default=True)),
            ],
        ),
    ]
