// Authentication Logic (Temporary LocalStorage version)
(function() {
  window.icebackAuth = {
    register: function(name, email, password) {
      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('iceback_users') || '[]');
      if (existingUsers.find(u => u.email === email)) {
        alert("An account with this email already exists. Please log in.");
        return;
      }

      // Create new user
      const newUser = { name, email, password };
      existingUsers.push(newUser);
      localStorage.setItem('iceback_users', JSON.stringify(existingUsers));
      
      // Auto-login
      localStorage.setItem('iceback_currentUser', JSON.stringify(newUser));
      alert("Registration successful! Redirecting to dashboard...");
      window.location.href = "dashboard.html";
    },

    login: function(email, password) {
      const users = JSON.parse(localStorage.getItem('iceback_users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('iceback_currentUser', JSON.stringify(user));
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid email or password. Please try again.");
      }
    },

    logout: function() {
      localStorage.removeItem('iceback_currentUser');
      window.location.href = "index.html";
    },

    getUser: function() {
      return JSON.parse(localStorage.getItem('iceback_currentUser'));
    }
  };
})();
