new Vue({
    el: "#app",
    data: {
        normal_use: false,
        walk_field: false,
        every_turn: false,
        in_attack: false,
        in_be_attacked: false,
        json: "",

        normal_use_common_atp: 0,
        normal_use_common_hp: 0,

        normal_infield_atp: 0,
        normal_infield_hp: 0,
        normal_infield_dangerlevel: 0,
        normal_infield_accuracy: 0,
        normal_infield_avoidance: 0,
        normal_infield_attack: 0,
        normal_infield_agility: 0,
        normal_infield_magicdefence: 0,
        normal_infield_physicaldefence: 0,
        normal_infield_target: "",
    },
    methods: {
        GenerateJson: function () {
            let effects_dict = {};
        },
        LoadJson: function () {
            console.log(JSON.parse(this.json));
        }
    }
});

