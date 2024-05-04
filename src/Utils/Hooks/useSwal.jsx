import React from "react";
import Swal from "sweetalert2";

export default function useSwal() {
  const Toast = Swal.mixin({
    toast: true,
    timer: 2500,
    timerProgressBar: true,
    position: "top-end",
    customClass: "dark:bg-[#262626!important] dark:text-[white!important]",
    showConfirmButton: false,
  });
  
  return {
    Toast,
  };
}
