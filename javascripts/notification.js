/**
 * This class provides access to notifications on the device.
 * @constructor
 */
function Notification() {
}

/**
 * Open a native alert dialog, with a customizable title and button text.
 * @param {String} message Message to print in the body of the alert
 * @param {String} [title="Alert"] Title of the alert dialog (default: Alert)
 * @param {String} [okLabel="OK"] Label of the first button (default: OK)
 * @param {String} [cancelLabel] Label of the optional second button
 * @param {Object} [options] Options to pass to the alert:
 *      - \c onClose {Function} callback handler to be called when the alert is closed; called with an Event
 *        object, with the \c buttonIndex and \c buttonLabel properties indicating which button was clicked.
 */
Notification.prototype.alert = function(message, title, buttonLabel, cancelLabel, options) {
    // Default is to use a browser alert; this will use "index.html" as the title though
    alert(message);
};

/**
 * Start spinning the activity indicator on the statusbar
 */
Notification.prototype.activityStart = function() {
};

/**
 * Stop spinning the activity indicator on the statusbar, if it's currently spinning
 */
Notification.prototype.activityStop = function() {
};

/**
 * Causes the device to blink a status LED.
 * @param {Integer} count The number of blinks.
 * @param {String} colour The colour of the light.
 */
Notification.prototype.blink = function(count, colour) {
};

/**
 * Causes the device to vibrate.
 * @param {Integer} mills The number of milliseconds to vibrate for.
 */
Notification.prototype.vibrate = function(mills) {
};

/**
 * Causes the device to beep.
 * @param {Integer} count The number of beeps.
 * @param {Integer} volume The volume of the beep.
 */
Notification.prototype.beep = function(count, volume) {
};

/**
 * Starts a loading indicator
 * @param {Object} options Options to supply to the indicator
 *      - \c minDuration {Integer} minimum duration, in seconds, the indicator can spin for
 *      - \c duration {Integer} stop the loading indicator after this number of seconds
 */
Notification.prototype.loadingStart = function(options) {
};

/**
 * Stops the loading indicator
 */
Notification.prototype.loadingStop = function() {
    PhoneGap.exec("Notification.loadingStop");
};

// TODO: of course on Blackberry and Android there notifications in the UI as well

PhoneGap.addConstructor(function() {
    if (typeof navigator.notification == "undefined") navigator.notification = new Notification();
});

