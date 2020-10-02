# Generated by Django 3.1.2 on 2020-10-02 21:06

import apis.models
from django.db import migrations, models
import djongo.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FixingCommit',
            fields=[
                ('sha', models.CharField(editable=False, max_length=50, primary_key=True, serialize=False, unique=True)),
                ('msg', models.TextField(blank=True, default='')),
                ('date', models.CharField(blank=True, default='', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Repositories',
            fields=[
                ('id', models.CharField(max_length=32, primary_key=True, serialize=False, unique=True)),
                ('owner', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('url', models.CharField(max_length=200)),
                ('default_branch', models.CharField(blank=True, default='master', max_length=100)),
                ('description', models.TextField(blank=True, default='')),
                ('issue_count', models.IntegerField(blank=True, default=0)),
                ('release_count', models.IntegerField(blank=True, default=0)),
                ('star_count', models.IntegerField(blank=True, default=0)),
                ('watcher_count', models.IntegerField(blank=True, default=0)),
                ('primary_language', models.CharField(blank=True, default='', max_length=50)),
                ('created_at', models.CharField(blank=True, default='', max_length=30)),
                ('pushed_at', models.CharField(blank=True, default='', max_length=30)),
                ('fixing_commits', djongo.models.fields.ArrayField(blank=True, model_container=apis.models.FixingCommit)),
            ],
        ),
    ]