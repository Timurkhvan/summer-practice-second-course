class FriendManager {
    constructor(container, addButton, maxFriends = 3) {
        this.container = container;
        this.addButton = addButton;
        this.maxFriends = maxFriends;
        this.friendCount = 0;

        this.init();
    }

    init() {
        this.addButton.addEventListener('click', () => this.addFriend());
    }

    addFriend() {
        if (this.friendCount >= this.maxFriends) return;

        this.friendCount++;
        const friendSection = this.createFriendSection(this.friendCount);
        this.container.appendChild(friendSection);

        if (this.friendCount >= this.maxFriends) {
            this.addButton.style.display = 'none';
        }
    }

    createFriendSection(number) {
        const section = document.createElement('div');
        section.className = 'friend-section';
        section.innerHTML = `
      <h4 class="friend-title">Друг ${number}</h4>
      <div class="friend-fields">
        <div class="friend-field">
          <label class="friend-label">ФИО *</label>
          <input type="text" class="form-input" placeholder="Введите ФИО" required>
        </div>
        <div class="friend-field">
          <label class="friend-label">Имейл *</label>
          <input type="email" class="form-input" placeholder="Введите имейл" required>
        </div>
        <div class="friend-field">
          <label class="friend-label">Номер телефона *</label>
          <input type="tel" class="form-input" placeholder="+7 777 77 77" required>
        </div>
      </div>
    `;
        return section;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const friendsContainer = document.getElementById('friends-container');
    const addFriendBtn = document.getElementById('add-friend-btn');

    new FriendManager(friendsContainer, addFriendBtn);
});