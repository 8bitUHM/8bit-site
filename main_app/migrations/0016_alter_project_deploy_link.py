# Generated by Django 4.2.15 on 2024-10-29 09:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0015_project_deploy_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='deploy_link',
            field=models.URLField(blank=True, max_length=1000, null=True),
        ),
    ]