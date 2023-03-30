import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() { }

  userName: any;

  ngOnInit(): void {
    this.userName = localStorage.getItem("userMasterFullName");

    if (($(window).width()) <= 768) {
      $(".test").click(function () {
        $("#navbar").hide();
      });
    }

    if (($(window).width()) <= 992) {
      $("#navbar").hide();
    } else {
      $("#navbar").show();
    }

    $(window).resize(function () {
      if (($(window).width()) <= 1151) {
        // $("#nav-toggler").hide();
        $("#navbar").hide();
      } else {
        $("#navbar").show();
        // $("#nav-toggler").show();

      }
    });
  }

  toggleNav() {
    $("#navbar").toggle(500);
  }

  logoutUser() {
    localStorage.clear();
    location.reload();
  }


}
