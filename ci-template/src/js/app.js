export default function checkStatus(user) {
  let status = '';
  if (user.health > 50) {
    status = 'healthy';
  } else if (user.health <= 50 && user.health >= 15) {
    status = 'wounded';
  } else if (user.health < 15) {
    status = 'critical';
  }
  return status;
}
