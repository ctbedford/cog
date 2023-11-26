

# Create your tests here.
from django.test import TestCase
from .models import Task

class TaskModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Task.objects.create(title='first task', description='a test task', completed=False)

    def test_title_label(self):
        task = Task.objects.get(id=1)
        field_label = task._meta.get_field('title').verbose_name
        self.assertEquals(field_label, 'title')

    def test_completed_default(self):
        task = Task.objects.get(id=1)
        self.assertFalse(task.completed)
