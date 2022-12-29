from django.contrib import admin
from .models import Coupon


class CouponAdmin(admin.ModelAdmin):
    list_display = ['code', 'Действителен', 'Недействителен', 'discount', 'active']
    list_filter = ['active', 'Действителен', 'Недействителен']
    search_fields = ['code']


admin.site.register(Coupon, CouponAdmin)

