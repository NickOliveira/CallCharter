const playbook = {
    message: 'Granite Hills',
    shifts: ["Hop", "Move"],
    formations: ["Duece", "I", "Trey"],
    run_protections: ["Raider", "Laker"]
}  

exports.getPlaybook = () => {
    return playbook;
}