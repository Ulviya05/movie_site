const containers = [...document.querySelectorAll(".filmSliderContainersss" , ".newReleaseCarts")]
const nextButton = [...document.querySelectorAll(".iconR" , '.iconRR')]
const prevButton = [...document.querySelectorAll(".iconL" , ".iconRL")]



containers.forEach((item, i) =>{
  let containerDimension = item.getBoundingClientRect()
  let containerWidth = containerDimension.width



  nextButton[i].addEventListener('click',()=>{
    item.scrollLeft += containerWidth
  })

  prevButton[i].addEventListener('click',()=>{
    item.scrollLeft -= containerWidth
  })
})




const newRelease = [...document.querySelectorAll(".newReleaseCarts")]
const nextRelease = [...document.querySelectorAll('.iconRR')]
const prevRelease = [...document.querySelectorAll( ".iconLL")]



newRelease.forEach((item, i) =>{
  let containerDimension = item.getBoundingClientRect()
  let containerWidth = containerDimension.width



  nextRelease[i].addEventListener('click',()=>{
    item.scrollLeft += containerWidth
  })

  prevRelease[i].addEventListener('click',()=>{
    item.scrollLeft -= containerWidth
  })
})

// **************
const splitContainer = document.querySelector(".container")
const left = document.querySelector(".left")
const right = document.querySelector(".right")

left.addEventListener("mousemove", (() => splitContainer.classList.add("hoverLeft")))
left.addEventListener("mouseleave", (() => splitContainer.classList.remove("hoverLeft")))

right.addEventListener("mousemove", (() => splitContainer.classList.add("hoverRight")))
right.addEventListener("mouseleave", (() => splitContainer.classList.remove("hoverRight")))