from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from .models import ProductModel, CategoryModel
from django.contrib import messages


@login_required
def dashboard(request):
    ctx = {
        'products': ProductModel.objects.all(),
        'categories': CategoryModel.objects.all()
    }
    return render(request, 'main/dashboard.html', ctx)


def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect(dashboard)
        else:
            messages.error(request, 'Usuario o contraseña inválidos')
            return render(request, 'main/login.html')
    else:
        return render(request, 'main/login.html')
