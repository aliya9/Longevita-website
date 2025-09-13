// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling for navigation links (only on single page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80; // Account for fixed navbar
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Form submission handling for Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual API call)
        showNotification('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
        
        // Reset form
        this.reset();
    });
}

// Form submission handling for Feedback Form
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const feedbackType = formData.get('feedbackType');
        const rating = formData.get('rating');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !feedbackType || !rating || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual API call)
        showNotification('Thank you for your feedback! We appreciate your input.', 'success');
        
        // Reset form
        this.reset();
        
        // Reset rating stars
        document.querySelectorAll('input[name="rating"]').forEach(radio => {
            radio.checked = false;
        });
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add notification styles to head
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        margin-left: 15px;
        padding: 0;
        line-height: 1;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .notification-message {
        flex: 1;
    }
`;
document.head.appendChild(notificationStyles);

// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other open FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Feedback Filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const feedbackCards = document.querySelectorAll('.feedback-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter feedback cards
            feedbackCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Load More Feedback Button
document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.querySelector('.load-more .btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // Simulate loading more feedback
            loadMoreBtn.textContent = 'Loading...';
            loadMoreBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('More feedback loaded!', 'success');
                loadMoreBtn.textContent = 'Load More Feedback';
                loadMoreBtn.disabled = false;
            }, 2000);
        });
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .overview-card, .about-text > div, .value-item, .step, .feedback-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for hero section (only on homepage)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero && window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.classList.contains('btn-primary') && !this.disabled) {
            // Add loading state
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.style.pointerEvents = 'none';
            
            // Simulate loading (replace with actual functionality)
            setTimeout(() => {
                this.textContent = originalText;
                this.style.pointerEvents = 'auto';
            }, 2000);
        }
    });
});

// Add hover effects for feature cards
document.querySelectorAll('.feature-card, .overview-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth reveal animation for feedback cards
function revealFeedbackCards() {
    const feedbackCards = document.querySelectorAll('.feedback-card');
    feedbackCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Initialize feedback animation when section is visible
const feedbackSection = document.querySelector('.community-feedback');
if (feedbackSection) {
    const feedbackObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealFeedbackCards();
                feedbackObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    feedbackObserver.observe(feedbackSection);
}

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-green), var(--secondary-green));
    z-index: 10001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add CSS variables for the progress bar
const progressBarStyles = document.createElement('style');
progressBarStyles.textContent = `
    :root {
        --primary-green: #2D5A27;
        --secondary-green: #4A7C59;
    }
`;
document.head.appendChild(progressBarStyles);

// Waitlist Signup Functionality
document.addEventListener('DOMContentLoaded', () => {
    const waitlistBtn = document.getElementById('waitlist-btn');
    const waitlistEmail = document.getElementById('waitlist-email');
    const waitlistSuccess = document.getElementById('waitlist-success');
    const waitlistForm = document.querySelector('.waitlist-form');
    
    if (waitlistBtn && waitlistEmail && waitlistSuccess) {
        waitlistBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = waitlistEmail.value.trim();
            
            // Basic email validation
            if (!email || !isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate saving email (replace with actual API call)
            saveWaitlistEmail(email);
            
            // Update UI
            waitlistBtn.textContent = 'Joined!';
            waitlistBtn.disabled = true;
            waitlistBtn.style.background = '#4CAF50';
            waitlistBtn.style.cursor = 'not-allowed';
            
            // Hide form and show success message
            waitlistForm.style.display = 'none';
            waitlistSuccess.style.display = 'flex';
            
            // Show success notification
            showNotification('Successfully joined our waitlist! We\'ll notify you when we launch.', 'success');
        });
    }
});

// Function to save waitlist email (replace with actual API call)
function saveWaitlistEmail(email) {
    // For now, we'll just store it in localStorage
    // In a real application, you would send this to your backend
    const waitlistEmails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
    waitlistEmails.push({
        email: email,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('waitlistEmails', JSON.stringify(waitlistEmails));
    
    console.log('Waitlist email saved:', email);
    console.log('All waitlist emails:', waitlistEmails);
}

// Admin Panel Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Check if admin panel should be shown
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
        showAdminPanel();
    }
    
    // Admin panel functionality
    const exportBtn = document.getElementById('export-csv');
    const clearBtn = document.getElementById('clear-emails');
    
    if (exportBtn) {
        exportBtn.addEventListener('click', exportEmailsToCSV);
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', clearAllEmails);
    }
});

function showAdminPanel() {
    const adminPanel = document.getElementById('admin-panel');
    if (adminPanel) {
        adminPanel.style.display = 'block';
        loadEmailData();
    }
}

function loadEmailData() {
    const emails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
    const totalEmailsEl = document.getElementById('total-emails');
    const todayEmailsEl = document.getElementById('today-emails');
    const emailTableEl = document.getElementById('email-table');
    
    if (totalEmailsEl) {
        totalEmailsEl.textContent = emails.length;
    }
    
    // Count today's emails
    const today = new Date().toDateString();
    const todayEmails = emails.filter(email => 
        new Date(email.timestamp).toDateString() === today
    );
    
    if (todayEmailsEl) {
        todayEmailsEl.textContent = todayEmails.length;
    }
    
    // Display emails in table
    if (emailTableEl) {
        if (emails.length === 0) {
            emailTableEl.innerHTML = '<div class="no-emails">No emails in waitlist yet.</div>';
        } else {
            emailTableEl.innerHTML = emails.map((email, index) => `
                <div class="email-row">
                    <div class="email-info">
                        <div class="email-address">${email.email}</div>
                        <div class="email-date">${new Date(email.timestamp).toLocaleString()}</div>
                    </div>
                    <div class="email-actions-row">
                        <button class="btn btn-small btn-secondary" onclick="copyEmail('${email.email}')">Copy</button>
                        <button class="btn btn-small btn-danger" onclick="removeEmail(${index})">Remove</button>
                    </div>
                </div>
            `).join('');
        }
    }
}

function exportEmailsToCSV() {
    const emails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
    
    if (emails.length === 0) {
        showNotification('No emails to export.', 'error');
        return;
    }
    
    // Create CSV content
    const csvContent = [
        'Email,Signup Date',
        ...emails.map(email => `"${email.email}","${new Date(email.timestamp).toLocaleString()}"`)
    ].join('\n');
    
    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `waitlist-emails-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification('Emails exported successfully!', 'success');
}

function clearAllEmails() {
    if (confirm('Are you sure you want to clear all emails? This action cannot be undone.')) {
        localStorage.removeItem('waitlistEmails');
        loadEmailData();
        showNotification('All emails cleared.', 'success');
    }
}

function copyEmail(email) {
    navigator.clipboard.writeText(email).then(() => {
        showNotification('Email copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy email.', 'error');
    });
}

function removeEmail(index) {
    const emails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
    emails.splice(index, 1);
    localStorage.setItem('waitlistEmails', JSON.stringify(emails));
    loadEmailData();
    showNotification('Email removed.', 'success');
}

// Rating Stars Interaction
document.addEventListener('DOMContentLoaded', () => {
    const ratingStars = document.querySelectorAll('.rating-stars');
    
    ratingStars.forEach(starGroup => {
        const stars = starGroup.querySelectorAll('label');
        const inputs = starGroup.querySelectorAll('input[type="radio"]');
        
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                // Uncheck all inputs
                inputs.forEach(input => input.checked = false);
                
                // Check the clicked star and all stars before it
                for (let i = 0; i <= index; i++) {
                    inputs[i].checked = true;
                }
            });
        });
    });
});

// Form Enhancement: Auto-resize textarea
document.addEventListener('DOMContentLoaded', () => {
    const textareas = document.querySelectorAll('textarea');
    
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    });
});

// Smooth page transitions
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in effect to page content
    const mainContent = document.querySelector('body');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);
    }
});

// Enhanced mobile navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Add active state based on current page
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
        
        // Add click effect
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
});
