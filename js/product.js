 document.querySelectorAll('.carousel-card').forEach(card => {
            card.addEventListener('click', function() {
                const title = this.getAttribute('data-title');
                const description = this.getAttribute('data-description');
                const imageSrc = this.getAttribute('data-image');
                
                // Update modal content
                document.getElementById('modal-title').textContent = title;
                document.getElementById('modal-description').textContent = description;
                document.getElementById('modal-image').src = imageSrc;
                document.getElementById('modal-image').alt = title;
                
                // Show modal with your custom animation
                document.getElementById('modal-container').className = 'four';
                document.body.classList.add('modal-active');
            });
        });

        // Close modal when clicking on background
        document.getElementById('modal-container').addEventListener('click', function(e) {
            if (e.target === this || e.target.classList.contains('modal-background')) {
                this.classList.add('out');
                document.body.classList.remove('modal-active');
                
                // Reset modal after animation
                setTimeout(() => {
                    this.className = '';
                }, 500);
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const modal = document.getElementById('modal-container');
                modal.classList.add('out');
                document.body.classList.remove('modal-active');
                
                setTimeout(() => {
                    modal.className = '';
                }, 500);
            }
        });