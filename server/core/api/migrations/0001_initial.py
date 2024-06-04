# Generated by Django 5.0.6 on 2024-06-04 11:30

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='MedicalData',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('uploadImage', models.ImageField(upload_to='images/')),
                ('rrsult', models.CharField(max_length=100)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
