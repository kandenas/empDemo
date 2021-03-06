var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    initialize: function() {
        var self = this;
        this.store = new WebSqlStore(function() {
    //        self.showAlert('Welcome to the contact application', 'Contacts');
            $('body').html(new HomeView(self.store).render().el);
        });
    }

};

app.initialize();