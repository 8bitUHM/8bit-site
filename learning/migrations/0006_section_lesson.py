# Generated by Django 4.2.11 on 2024-04-30 05:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('learning', '0005_section'),
    ]

    operations = [
        migrations.AddField(
            model_name='section',
            name='lesson',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='learning.lesson'),
            preserve_default=False,
        ),
    ]