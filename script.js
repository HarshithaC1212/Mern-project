const form = document.getElementById('feedbackForm');
const feedbackContainer = document.getElementById('feedbackContainer');
const totalCount = document.getElementById('totalCount');
const avgRating = document.getElementById('avgRating');

let feedbacks = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const user = document.getElementById('user').value.trim();
  const message = document.getElementById('message').value.trim();
  const rating = parseFloat(document.getElementById('rating').value);

  if (!user || !message || isNaN(rating) || rating < 1 || rating > 5) {
    alert("Please fill all fields with valid data.");
    return;
  }

  const feedback = { user, message, rating };
  feedbacks.push(feedback);

  updateUI();
  form.reset();
});

function updateUI() {
  // Update feedback list
  feedbackContainer.innerHTML = "";
  feedbacks.forEach((fb, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${fb.user}</strong>: ${fb.message} (⭐ ${fb.rating})`;
    feedbackContainer.appendChild(li);
  });

  // Update stats
  totalCount.textContent = feedbacks.length;
  const totalRating = feedbacks.reduce((sum, fb) => sum + fb.rating, 0);
  avgRating.textContent = (totalRating / feedbacks.length).toFixed(1);
}
