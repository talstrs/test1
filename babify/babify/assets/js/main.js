"use strict"

/*--
    Header Top High
-----------------------------------*/
const headerTopHigh = (selector) => {
    const headerTop = document.querySelector(selector)

    if (headerTop) {
        const headerTopHeight = headerTop.clientHeight
        const headerHeight = document.querySelector("main")
        headerHeight.style.marginTop = headerTopHeight + "px"
    }
}

headerTopHigh(".header-height")

/*--
    Header Sticky
-----------------------------------*/
const headerSticky = (selector) => {
    const header = document.querySelector(selector)

    if (header) {
        const headerLogo = header.querySelector(".change-logo img")

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset

            if (currentScroll > 150) {
                header.classList.add("is-sticky")

                if (headerLogo) {
                    headerLogo.src = "./assets/images/logo.png"
                }
            } else {
                header.classList.remove("is-sticky")

                if (headerLogo) {
                    headerLogo.src = "./assets/images/logo-white.png"
                }
            }
        })
    }
}

headerSticky(".header")

// menu-items-list menu-items-list--dark

/*--
    Mobile Menu 

    Global Functions
    - Get Sibling
    - Slide Up
    - Slide Down
    - Slide Toggle
-----------------------------------*/

/* Get Sibling */
const getSiblings = (elem) => {
    const siblings = []
    let sibling = elem.parentNode.firstChild

    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling)
        }
        sibling = sibling.nextSibling
    }
    return siblings
}

/* Slide Up */
const slideUp = (target, time) => {
    const duration = time ? time : 500
    target.style.transitionProperty = "height, margin, padding"
    target.style.transitionDuration = duration + "ms"
    target.style.boxSizing = "border-box"
    target.style.height = target.offsetHeight + "px"
    target.offsetHeight
    target.style.overflow = "hidden"
    target.style.height = 0
    window.setTimeout(() => {
        target.style.display = "none"
        target.style.removeProperty("height")
        target.style.removeProperty("overflow")
        target.style.removeProperty("transition-duration")
        target.style.removeProperty("transition-property")
    }, duration)
}

/* Slide Down */
const slideDown = (target, time) => {
    const duration = time ? time : 500
    target.style.removeProperty("display")
    let display = window.getComputedStyle(target).display
    if (display === "none") display = "block"
    target.style.display = display
    const height = target.offsetHeight
    target.style.overflow = "hidden"
    target.style.height = 0
    target.offsetHeight
    target.style.boxSizing = "border-box"
    target.style.transitionProperty = "height, margin, padding"
    target.style.transitionDuration = duration + "ms"
    target.style.height = height + "px"
    window.setTimeout(() => {
        target.style.removeProperty("height")
        target.style.removeProperty("overflow")
        target.style.removeProperty("transition-duration")
        target.style.removeProperty("transition-property")
    }, duration)
}

/* Slide Toggle */
const slideToggle = (target, time) => {
    const duration = time ? time : 500
    if (window.getComputedStyle(target).display === "none") {
        return slideDown(target, duration)
    } else {
        return slideUp(target, duration)
    }
}

/* Offcanvas/Collapseable Menu */
const offCanvasMenu = (selector) => {
    const offCanvasNav = document.querySelector(selector)

    offCanvasNav.querySelectorAll(".menu-expand").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault()
            const parent = item.parentElement.parentElement

            if (parent.classList.contains("active")) {
                parent.classList.remove("active")

                parent
                    .querySelectorAll(".sub-menu, .mega-menu, .children")
                    .forEach((subMenu) => {
                        subMenu.parentElement.classList.remove("active")
                        slideUp(subMenu)
                    })
            } else {
                parent.classList.add("active")
                slideDown(item.parentElement.nextElementSibling)

                getSiblings(parent).forEach((item) => {
                    item.classList.remove("active")

                    item.querySelectorAll(
                        ".sub-menu, .mega-menu, .children"
                    ).forEach((subMenu) => {
                        subMenu.parentElement.classList.remove("active")
                        slideUp(subMenu)
                    })
                })
            }
        })
    })
}

offCanvasMenu(".navbar-mobile-menu, .slidedown-menu__menu")

/*--
    Main Slider
-----------------------------------*/
var swiper = new Swiper(".slider-active .swiper", {
    parallax: true,
    effect: "fade",
    loop: true,
    speed: 1200,

    // If we need pagination
    pagination: {
        el: ".slider-active .swiper-pagination",
        type: "bullets",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".slider-active .swiper-button-next",
        prevEl: ".slider-active .swiper-button-prev",
    },
})

/*--
    Product Active
-----------------------------------*/
var swiper = new Swiper(".product-active .swiper", {
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: ".product-active .swiper-button-next",
        prevEl: ".product-active .swiper-button-prev",
    },

    // Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
})

/*--
    Category Active
-----------------------------------*/
var swiper = new Swiper(".category-active .swiper", {
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: ".category-active .swiper-button-next",
        prevEl: ".category-active .swiper-button-prev",
    },
    // Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
})

/*--
    Client
-----------------------------------*/
var swiper = new Swiper(".client-active .swiper", {
    loop: true,
    spaceBetween: 0,

    // Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    // Pagination
    pagination: {
        el: ".client-active .swiper-pagination",
        clickable: true,
    },
})

/*--
    Instagram Active
-----------------------------------*/
var swiper = new Swiper(".instagram-active .swiper", {
    // Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
    },
})

/*--
    Bootstrap Tooltip
-----------------------------------*/
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-tooltip="tooltip"]'
)
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
)

/*--
    Instagram Masonry
-----------------------------------*/
const instagramMasonry = (selector) => {
    const grid = document.querySelector(selector)

    if (grid) {
        window.addEventListener("load", () => {
            const msnry = new Masonry(grid, {
                // options...
                itemSelector: ".grid-item",

                // columnWidth: 2,
            })
        })
    }
}

instagramMasonry(".grid")

/*--
    Instagram Masonry
-----------------------------------*/
const BannerMasonry = (selector) => {
    const grid = document.querySelector(selector)

    if (grid) {
        window.addEventListener("load", () => {
            const msnry = new Masonry(grid, {
                // options...
                itemSelector: ".grid-item",

                // columnWidth: 2,
            })
        })
    }
}

BannerMasonry(".banner-grid")

/*--
    Countdown
-----------------------------------*/
const countdown = (selector) => {
    const countdownSelector = document.querySelectorAll(selector)

    countdownSelector.forEach((countdowns) => {
        const setValue = countdowns.getAttribute("data-countdown")

        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24

        const countDown = new Date(setValue).getTime()
        const x = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDown - now
            const result = distance < 0

            const days = countdowns.querySelector(".days")
            const hours = countdowns.querySelector(".hours")
            const minutes = countdowns.querySelector(".minutes")
            const seconds = countdowns.querySelector(".seconds")

            days.innerText = result
                ? "00"
                : Math.floor(distance / day) > 9
                ? Math.floor(distance / day)
                : "0" + Math.floor(distance / day)

            hours.innerText = result
                ? "00"
                : Math.floor((distance % day) / hour) > 9
                ? Math.floor((distance % day) / hour)
                : "0" + Math.floor((distance % day) / hour)

            minutes.innerText = result
                ? "00"
                : Math.floor((distance % hour) / minute) > 9
                ? Math.floor((distance % hour) / minute)
                : "0" + Math.floor((distance % hour) / minute)

            seconds.innerText = result
                ? "00"
                : Math.floor((distance % minute) / second) > 9
                ? Math.floor((distance % minute) / second)
                : "0" + Math.floor((distance % minute) / second)

            if (result) {
                clearInterval(x)
            }

            //seconds
        }, 0)
    })
}

countdown(".countdown")

/*--
    Testimonial Active
-----------------------------------*/
var testimonial = new Swiper(".testimonial-active .swiper", {
    slidesPerView: 1,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".testimonial-active  .swiper-button-next",
        prevEl: ".testimonial-active  .swiper-button-prev",
    },
})

/*--
    Product Color Switcher
-----------------------------------*/
const productColorSwitcher = (selector) => {
    const productColorSwitcher = document.querySelector(selector)

    if (productColorSwitcher) {
        const colorItem = productColorSwitcher.querySelectorAll(".color-item")

        colorItem.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault()

                item.classList.add("active")

                getSiblings(item).forEach((item) => {
                    item.classList.remove("active")
                })
            })
        })
    }
}

productColorSwitcher(".single-product__info--color-swatch")

/*--
    G Light Box
-----------------------------------*/
const lightboxVideo = GLightbox({
    selector: ".glightbox",
})

/*--
    G Light Box
-----------------------------------*/
const productLightbox = GLightbox({
    selector: ".product-glightbox",
})

/*--
    Shop Filter
-----------------------------------*/
const shopFilter = (selector) => {
    const shopFilter = document.querySelector(selector)

    if (shopFilter) {
        const shopFilterWidget = document.querySelector(".shop-filter-widget")

        shopFilter.addEventListener("click", (e) => {
            e.preventDefault()

            if (shopFilterWidget.classList.contains("open")) {
                shopFilterWidget.classList.remove("open")
            } else {
                shopFilterWidget.classList.add("open")
            }
        })
    }
}

shopFilter(".shop-filter-toggle")

/*--
    Price Range Slider
-----------------------------------*/
const priceRange = (selector) => {
    const priceRange = document.querySelector(selector)

    if (priceRange) {
        const rangeInput = document.querySelectorAll(
            ".filter-range-input input"
        )
        const priceInput = document.querySelectorAll(
            ".filter-price-value input"
        )
        const range = document.querySelector(".filter-slider .filter-progress")
        let priceGap = 10

        window.addEventListener("load", () => {
            let minVal = parseInt(rangeInput[0].value)
            let maxVal = parseInt(rangeInput[1].value)

            range.style.left = (minVal / rangeInput[0].max) * 100 + "%"
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%"
        })

        priceInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minPrice = parseInt(priceInput[0].value)
                let maxPrice = parseInt(priceInput[1].value)

                if (
                    maxPrice - minPrice >= priceGap &&
                    maxPrice <= rangeInput[1].max
                ) {
                    if (e.target.className === "input-min") {
                        rangeInput[0].value = minPrice
                        range.style.left =
                            (minPrice / rangeInput[0].max) * 100 + "%"
                    } else {
                        rangeInput[1].value = maxPrice
                        range.style.right =
                            100 - (maxPrice / rangeInput[1].max) * 100 + "%"
                    }
                }
            })
        })

        rangeInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minVal = parseInt(rangeInput[0].value)
                let maxVal = parseInt(rangeInput[1].value)

                if (maxVal - minVal < priceGap) {
                    if (e.target.className === "range-min") {
                        rangeInput[0].value = maxVal - priceGap
                    } else {
                        rangeInput[1].value = minVal + priceGap
                    }
                } else {
                    priceInput[0].value = "$" + minVal
                    priceInput[1].value = "$" + maxVal
                    range.style.left = (minVal / rangeInput[0].max) * 100 + "%"
                    range.style.right =
                        100 - (maxVal / rangeInput[1].max) * 100 + "%"
                }
            })
        })
    }
}

priceRange(".price-range-filter")

/*--
    Product Single
-----------------------------------*/
const ProductThumb = new Swiper(".product-single-thumb .swiper", {
    spaceBetween: 30,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,

    // Breakpoints
    breakpoints: {
        0: {
            spaceBetween: 10,
        },
        768: {
            spaceBetween: 30,
        },
    },
})
const ProductSingle = new Swiper(".product-single-slide .swiper", {
    spaceBetween: 0,
    navigation: {
        nextEl: ".product-single-slide .swiper-button-next",
        prevEl: ".product-single-slide .swiper-button-prev",
    },
    thumbs: {
        swiper: ProductThumb,
    },
})

/*--
    Related Product
-----------------------------------*/
var swiper = new Swiper(".related-product-active .swiper", {
    loop: true,
    // Pagination
    pagination: {
        el: ".related-product-active .swiper-pagination",
        clickable: true,
    },
    // Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
})

/*--
    Product variable Color
-----------------------------------*/
const productVariable = (selector) => {
    const productVariable = document.querySelector(selector)

    if (productVariable) {
        const productColor = productVariable.querySelectorAll(
            ".variable-color__color"
        )
        const productSize = productVariable.querySelectorAll(
            ".variable-size__size"
        )
        const reset = document.querySelector(".reset-variable")

        const variableItem = [...productSize, ...productColor]

        variableItem.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault()

                if (item.classList.contains("active")) {
                    item.classList.remove("active")
                    reset.classList.remove("visible")
                } else {
                    item.classList.add("active")
                    reset.classList.add("visible")

                    getSiblings(item).forEach((item) => {
                        item.classList.remove("active")
                    })
                }
            })
            reset.addEventListener("click", (e) => {
                e.preventDefault()

                reset.classList.remove("visible")
                item.classList.remove("active")
            })
        })
    }
}

productVariable(".product-variable")

/*--
    Product Quantity
-----------------------------------*/

const productQuantity = (selector) => {
    const quantity = document.querySelectorAll(selector)

    quantity.forEach((element) => {
        const quantityIncrease = element.querySelector(".increase")
        const quantityDecrease = element.querySelector(".decrease")
        const quantityInput = element.querySelector(".quantity-input")

        let count = 1

        quantityIncrease.addEventListener("click", () => {
            count++
            count = count < 10 ? "0" + count : count
            quantityInput.value = count
        })
        quantityDecrease.addEventListener("click", () => {
            if (count > 1) {
                count--
                count = count < 10 ? "0" + count : count
                quantityInput.value = count
            }
        })
    })
}

productQuantity(".product-quantity")

/*--
    Product Single Carousel 
-----------------------------------*/
var swiper = new Swiper(".product-single-carousel .swiper", {
    loop: true,
    navigation: {
        nextEl: ".product-single-carousel .swiper-button-next",
        prevEl: ".product-single-carousel .swiper-button-prev",
    },
    // Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
})

/*--
    select2
-----------------------------------*/
document.addEventListener("DOMContentLoaded", (e) => {
    // default
    const els = document.querySelectorAll(".select2")
    els.forEach((select) => {
        NiceSelect.bind(select, {
            searchable: true,
            placeholder: "select",
            searchtext: "Search Country",
            selectedtext: "geselecteerd",
        })
    })
})

/*--
    Checkout Account & Shipping
-----------------------------------*/
/**
 * getHeight - for elements with display:none
 */
const getHeight = (el) => {
    let el_style = window.getComputedStyle(el)
    let el_display = el_style.display
    let el_position = el_style.position
    let el_visibility = el_style.visibility
    let el_max_height = el_style.maxHeight.replace("px", "").replace("%", "")
    let wanted_height = 0

    // if its not hidden we just return normal height
    if (el_display !== "none" && el_max_height !== "0") {
        return el.offsetHeight
    }

    // the element is hidden so:
    // making the el block so we can meassure its height but still be hidden
    el.style.position = "absolute"
    el.style.visibility = "hidden"
    el.style.display = "block"

    wanted_height = el.offsetHeight

    // reverting to the original values
    el.style.display = el_display
    el.style.position = el_position
    el.style.visibility = el_visibility

    return wanted_height
}

/**
 * toggleSlide mimics the jQuery version of slideDown and slideUp
 * all in one function comparing the max-heigth to 0
 */
const toggleSlide = (el) => {
    let el_max_height = 0

    if (el.getAttribute("data-max-height")) {
        // we've already used this before, so everything is setup
        if (el.style.maxHeight.replace("px", "").replace("%", "") === "0") {
            el.style.maxHeight = el.getAttribute("data-max-height")
        } else {
            el.style.maxHeight = "0"
        }
    } else {
        el_max_height = getHeight(el) + "px"
        el.style["transition"] = "max-height 0.5s ease-in-out"
        el.style.overflow = "hidden"
        el.style.maxHeight = "0"
        el.setAttribute("data-max-height", el_max_height)
        el.style.display = "block"

        // we use setTimeout to modify maxHeight later than display (to we have the transition effect)
        setTimeout(function () {
            el.style.maxHeight = el_max_height
        }, 10)
    }
}

const checkoutAccount = (selector) => {
    const checkoutVisible = document.querySelector(selector)
    const account = document.querySelectorAll(".account")

    if (checkoutVisible) {
        account.forEach((element) => {
            element.addEventListener("click", (e) => {
                toggleSlide(checkoutVisible)
            })
        })
    }
}

checkoutAccount(".checkout-account")

const checkoutShipping = (selector) => {
    const checkoutVisible = document.querySelector(selector)
    const shipping = document.querySelectorAll(".shipping")

    if (checkoutVisible) {
        shipping.forEach((element) => {
            element.addEventListener("click", (e) => {
                toggleSlide(checkoutVisible)
            })
        })
    }
}

checkoutShipping(".checkout-shipping")

/*--
    Quick View Slides 
-----------------------------------*/
const QuickViewProduct = new Swiper(".quick-view-product-slide .swiper", {
    spaceBetween: 0,
    navigation: {
        nextEl: ".quick-view-product-slide .swiper-button-next",
        prevEl: ".quick-view-product-slide .swiper-button-prev",
    },
})

/*--
    On Scroll Animations
-----------------------------------*/
const scrollElements = document.querySelectorAll(".js-scroll")

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    )
}

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top

    return (
        elementTop >
        (window.innerHeight || document.documentElement.clientHeight)
    )
}

const displayScrollElement = (element) => {
    element.classList.add("scrolled")
}

const hideScrollElement = (element) => {
    element.classList.remove("scrolled")
}

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el)
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

;["scroll", "load"].forEach((el) => {
    window.addEventListener(el, handleScrollAnimation)
})

/*--
    Automatic Pop-Up
-----------------------------------*/
const AutoPopup = (selector) => {
    const popup = document.querySelector(selector)
    const popupOverlay = document.querySelector(".popup-modal-overlay")
    const popupClose = document.querySelector(".popup-close__btn")

    if (popup) {
        setTimeout(() => {
            popup.classList.add("open")
            popup.classList.remove("close")
            popupOverlay.classList.add("open")
            popupOverlay.classList.remove("close")
        }, 1000)
        ;[popupClose, popupOverlay].forEach((el) => {
            el.addEventListener("click", () => {
                popup.classList.remove("open")
                popup.classList.add("close")
                popupOverlay.classList.remove("open")
                popupOverlay.classList.add("close")
            })
        })
    }
}

AutoPopup(".popup-modal")

/*--
    CopyRight Current Year
-----------------------------------*/

const currentYear = (selector) => {
    const yearSelector = document.querySelectorAll(selector)
    const year = new Date().getFullYear()

    yearSelector.forEach((curYear) => {
        curYear.innerText = year.toString()
    })
}

currentYear(".current-year")

/*--
const relativeSortArray = (arr1, arr2) => {
    let result = []

    for (let i = 0; i < arr1.length; i++) {
        const filterArr = arr1.filter((num) => num == arr2[i])
        result.push(...filterArr)
    }

    const setArray = new Set(arr2)
    const noArray = arr1
        .filter((num) => !setArray.has(num))
        .sort((a, b) => a - b)
    result.push(...noArray)

    return result
}

relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])


var heightChecker = (heights) => {
    const output = []

    let heightSorted = [...heights]
    heightSorted.sort((a, b) => a - b)

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != heightSorted[i]) {
            output.push(i)
        }
    }

    // return output.length

    console.log(output)
}

heightChecker([1, 1, 4, 2, 1, 3])


var targetIndices = (nums, target) => {
    const output = []

    let numSorted = [...nums]
    numSorted.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (numSorted[i] === target) {
            output.push(i)
        }
    }

    return output
}

targetIndices([1, 2, 5, 2, 3], 5)


--*/
