let inc = 1
const members = [
  {
    id: inc,
    name: "Julie",
    available: false
  }
]

function allMembers() {
  return members
}
exports.allMembers = allMembers

function addMember(name) {
  inc++
  members.push(
    {
      id: inc,
      name: name,
      available: false
    }
  )
}

exports.addMember = addMember

function toggleAvailable(userId) {
  const user = members.find(user => user.id === userId)
  if (user) {
    user.available = !user.available
  }
}
exports.toggleAvailable = toggleAvailable