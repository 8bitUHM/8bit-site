# Generated by Django 4.2.11 on 2024-04-30 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learning', '0010_section_page'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.AlterField(
            model_name='lesson',
            name='skills',
            field=models.CharField(blank=True, max_length=256),
        ),
        migrations.AddField(
            model_name='lesson',
            name='tags',
            field=models.ManyToManyField(to='learning.tag'),
        ),
    ]
