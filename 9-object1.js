let profile = {
    name: 'Araiva',
    height: 174,
    weight: 70,
    grades: [
        { subject: 'Social', score: 60 },
        { subject: 'Eng', score: 80 },
        { subject: 'Math',  score: 100 },
        { subject: 'Physic',  score: 50 },
    ],
};
// profile.address = 'Thailand';   // not suggest
Object.assign(profile, {
    address: 'Thailand'
});
profile = {
    ...profile, // spread operation
    'money': 200,
    weight: 60,
    school: 'Bodindecha',
}
console.log('name', profile.hasOwnProperty('name'));
console.log('height', !!profile.height);
console.log('address', profile.address);
console.log('school', profile.school);
console.log('weight', profile.weight);
console.log('money', profile.money);
// write function get value from key getValue(key) if not found return 0
// getValue('height') => 174
function getValue(key) {
    return profile[key] || 0;
}
console.log('>>school', getValue('school'));
console.log('>>schoolx', getValue('schoolx'));
console.log('keys', Object.keys(profile));
console.log('values', Object.values(profile));