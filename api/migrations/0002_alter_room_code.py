# Generated by Django 5.0.4 on 2024-05-21 07:55

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='code',
            field=models.CharField(default=api.models.generate_random_code, max_length=8, unique=True),
        ),
    ]