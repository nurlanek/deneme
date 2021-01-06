from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User
#from main.models import AdvUser

class Participant(models.Model):
    name = models.CharField(max_length=40, verbose_name='Аты Фамилиясы')
    job_name = models.CharField(max_length=40, verbose_name='Кесиби')
    tel = models.CharField(max_length=20, blank=True, verbose_name='Телефон номери')
    email = models.CharField(max_length=20, blank=True, verbose_name='Эл. почтасы')
    def __str__(self):
        return self.name

class Project_members(models.Model):
    name = models.CharField(max_length=128)
    user = models.ForeignKey(User, through='Projects')

    def __str__(self):
        return self.name

class Project_participant_members(models.Model):
    name = models.CharField(max_length=128)
    participant = models.ForeignKey(Participant, on_delete=models.CASCADE, verbose_name='Катышуучулар')

    def __str__(self):
        return self.name

class Projects(models.Model):
    project_name = models.CharField(max_length=60, verbose_name='Проектин аты')
    project_content = models.TextField (verbose_name='Проектин контенти')
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank = True, null=True, verbose_name='Проектин лидери')
    project_members = models.ForeignKey(Project_members, blank=True, on_delete=models.CASCADE)
    project_participant_members = models.ForeignKey(Project_participant_members, on_delete=models.CASCADE)
    price = models.FloatField(default=0, verbose_name='Баасы')
    starting_date = models.DateTimeField(auto_now_add=False, db_index=True, verbose_name='Баштоо күнү')
    end_date = models.DateTimeField(auto_now_add=False, db_index=True, verbose_name='Аяктоо күнү')
    project_description = models.TextField (verbose_name='Кошумча коментарий')
    created_at = models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Жарыяланды')






# Create your models here.
