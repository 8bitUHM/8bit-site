# Generated by Django 4.2.8 on 2024-04-13 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0002_socialmedia_social_media_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='socialmedia',
            name='name',
            field=models.CharField(help_text="Phat's LinkedIn or Adam's Email", max_length=255),
        ),
    ]
