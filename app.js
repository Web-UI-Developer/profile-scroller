// data

const data = [
  {
    name: 'Smith',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'San Antonio Tx',
    image: 'https://randomuser.me/api/portraits/men/10.jpg'
  },
  {
    name: 'David',
    age: 30,
    gender: 'male',
    lookingfor: 'female',
    location: 'San Antonio Tx',
    image: 'https://randomuser.me/api/portraits/men/20.jpg'
  },
  {
    name: 'Sansa',
    age: 28,
    gender: 'female',
    lookingfor: 'male',
    location: 'San Antonio Tx',
    image: 'https://randomuser.me/api/portraits/women/10.jpg'
  },
  {
    name: 'shreya',
    age: 34,
    gender: 'female',
    lookingfor: 'male',
    location: 'San Antonio Tx',
    image: 'https://randomuser.me/api/portraits/women/50.jpg'
  }
];
const profiles = profileIterator(data);
nextProfile();
document.getElementById('next').addEventListener('click', nextProfile);
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}
