var keystone = require('keystone');
var Subscription = keystone.list('Subscription');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	view.on('post', { action: 'catchEmail' }, function () {
		var newSub = new Subscription.model();
		var updater = newSub.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: false,
			fields: 'email',
			errorMessage: 'There was a problem submitting your email address:',
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
				res.send('fail');
			} else {
				locals.enquirySubmitted = true;
				res.send('success');
			}
		});
	});

	// Render the view
	view.render('index');
};
