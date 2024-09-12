setInterval(() => {

    var buttonQueries = [
        'button.ytp-ad-skip-button',
        'button.ytp-ad-skip-button-modern',
        'button.ytp-skip-ad-button',
        'button.ytp-skip-ad-button-modern',
        'button.ytp-ad-overlay-close-button'
    ]

    for (var button of document.querySelectorAll(buttonQueries.join(',')))
        button.click();

}, 500);
