exports.getIndex = (req, res) => {
    res.render('shop/index', { pageTitle: "Shop", path: "/" })
}

exports.getCard = (req, res) => {
    res.render('shop/card', { pageTitle: "Card", path: "/card" })
}

exports.getCheckout = (req, res) => {
    res.render('shop/checkout', { pageTitle: "Checkout", path: "/checkout" })
}

