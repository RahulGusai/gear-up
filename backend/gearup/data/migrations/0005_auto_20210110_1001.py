# Generated by Django 3.1.5 on 2021-01-10 10:01

from django.db import migrations, models
import django_mysql.models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0004_auto_20210110_0943'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='activity',
            field=django_mysql.models.ListCharField(models.CharField(max_length=50), max_length=5000, size=None),
        ),
    ]
