# Generated by Django 2.2.3 on 2019-08-12 06:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0015_auto_20190812_1141'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('male', 'Male'), ('female', 'Female'), ('not-specified', 'Not specified')], max_length=80, null=True),
        ),
    ]
