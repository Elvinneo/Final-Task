from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth import authenticate, login
from django.contrib import messages


def home_view(request):
    user=''
    if request.method == "POST":
        mail = request.POST.get('mail')
        password = request.POST.get('password')
        user = authenticate(request, mail=mail, password=password)

        if user is not None:
            login(request, user)
            messages.error(request, "Email və ya şifrə yanlışdır")
            return render(request, 'home.html',{'user': user.username})
            
        else:
            messages.error(request, "Email və ya şifrə yanlışdır")
    return render(request, 'home.html')



def about_view(request):
    return render(request,'about.html')

def blog_view(request):
    return render(request,'blog.html')

def membership_view(request):
    return render(request,'membership.html')

def membership_detail_view(request):
    return render(request,'membership_detail.html')

def blogdetail_view(request):
    return render(request,'blogdetail.html')


def overlays_view(request):
    return render(request,'overlays.html')


