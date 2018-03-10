from django.contrib import admin

# Register your models here.

# 追記　管理サイトでアプリケーション用テーブルを登録
from app1.models import Ipaddress

# IPaddressテーブルのフィールド情報を表示させる
class IpaddressAdmin(admin.ModelAdmin):
    list_display = ('ipaddress', 'status', 'description')

admin.site.register(Ipaddress, IpaddressAdmin)
