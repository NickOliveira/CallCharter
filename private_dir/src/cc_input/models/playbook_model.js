const playbook = {
    message: 'Ramona',
    shifts: ["Hop", "Move", "Flop", "Scatter", "Switch", 'Zoom'],
    formations: ["Duece", "I", "Trey",
    "Near Aces", "Far Aces", "I Aces", "I Wing", "Near Wing", "Far Wing", 
    "I", "Near", "Far", "Big Aces", 'Quad Trianlge'],
    form_tags: ["Tite", "Slot", "Z-Stack", "Close", "Off"],
    run_protections: ["Raider", "Laker", "Lisa", "Bob", 
        'Naked Laker', 'Naked Raider', 'Purple Raider', 'Purple Laker', 'Power Rt', 'Power Lt',
        'Iso Rt', 'Iso Lt', 'Raspberry', 'Lemon'],
    personnels: ["Regular", 'Titan', 'Spartan', 'Viking', 'Dog'],
    motions: ["Z-Fly", "Give", "Wrap", 'Ghost'],
    concepts: ["Levels", 'Snag', 'Burner', 'Drift', 'Flood', 'Switch', 'Pound'], 
    tags: ["Smoke", 'Under', 'Delay']
}  

exports.getPlaybook = () => {
    return playbook;
}