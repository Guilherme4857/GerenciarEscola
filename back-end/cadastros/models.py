from django.db import models
from uuid import uuid4

class Curso(models.Model):
    id= models.UUIDField(primary_key= True, max_length= 255, default= uuid4, editable= False)
    nome= models.CharField(max_length= 255) 

class Aluno(models.Model):
    id = models.UUIDField(primary_key= True, max_length= 255, default= uuid4, editable= False)
    nome = models.CharField(max_length= 255)
    cursos = models.ManyToManyField(Curso)
