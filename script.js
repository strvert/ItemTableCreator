new Vue({
    el: "#app",
    data: {
        infield_targets: ['Person', 'Party'],
        inbattle_targets: ['Person', 'Around', 'Party'],
        inbattle_ailment_types: ['Give', 'Clear'],
        probabilities: ['Absolutely', 'Probably', 'Maybe', 'Possibly'],

        normal_use: false,
        walk_field: false,
        every_turn: false,
        in_attack: false,
        in_be_attacked: false,
        json: "",

        normal_use_common_hp: 0,
        normal_use_common_hp_enabled: false,
        normal_use_common_atp: 0,
        normal_use_common_atp_enabled: false,

        normal_infield_atp: 0,
        normal_infield_atp_enabled: false,
        normal_infield_hp: 0,
        normal_infield_hp_enabled: false,
        normal_infield_dangerlevel: 0,
        normal_infield_dangerlevel_enabled: false,
        normal_infield_accuracy: 0,
        normal_infield_accuracy_enabled: false,
        normal_infield_avoidance: 0,
        normal_infield_avoidance_enabled: false,
        normal_infield_attack: 0,
        normal_infield_attack_enabled: false,
        normal_infield_agility: 0,
        normal_infield_agility_enabled: false,
        normal_infield_magicdefence: 0,
        normal_infield_magicdefence_enabled: false,
        normal_infield_physicaldefence: 0,
        normal_infield_physicaldefence_enabled: false,
        normal_infield_target: "Person",
        normal_infield_target_enabled: false,

        normal_infield_customevent_id: 0,
        normal_infield_customevent_enabled: false,

        normal_inbattle_hp: 0,
        normal_inbattle_hp_enabled: false,
        normal_inbattle_atp: 0,
        normal_inbattle_atp_enabled: false,
        normal_inbattle_dangerlevel: 0,
        normal_inbattle_dangerlevel_enabled: false,
        normal_inbattle_accuracy: 0,
        normal_inbattle_accuracy_enabled: false,
        normal_inbattle_avoidance: 0,
        normal_inbattle_avoidance_enabled: false,
        normal_inbattle_attack: 0,
        normal_inbattle_attack_enabled: false,
        normal_inbattle_agility: 0,
        normal_inbattle_agility_enabled: false,
        normal_inbattle_magicdefence: 0,
        normal_inbattle_magicdefence_enabled: false,
        normal_inbattle_physicaldefence: 0,
        normal_inbattle_physicaldefence_enabled: false,
        normal_inbattle_target: "Person",
        normal_inbattle_target_enabled: false,

        normal_inbattle_poison_action: "Give",
        normal_inbattle_poison_probability: 100,
        normal_inbattle_poison_enabled: false,
        normal_inbattle_sleep_action: "Give",
        normal_inbattle_sleep_probability: 100,
        normal_inbattle_sleep_enabled: false,
        normal_inbattle_frostbite_action: "Give",
        normal_inbattle_frostbite_probability: 100,
        normal_inbattle_frostbite_enabled: false,
        normal_inbattle_paralysis_action: "Give",
        normal_inbattle_paralysis_probability: 100,
        normal_inbattle_paralysis_enabled: false,
        normal_inbattle_bleeding_action: "Give",
        normal_inbattle_bleeding_probability: 100,
        normal_inbattle_bleeding_enabled: false,
        normal_inbattle_confusion_action: "Give",
        normal_inbattle_confusion_probability: 100,
        normal_inbattle_confusion_enabled: false,
        normal_inbattle_blindness_action: "Give",
        normal_inbattle_blindness_probability: 100,
        normal_inbattle_blindness_enabled: false,
        normal_inbattle_weakness_action: "Give",
        normal_inbattle_weakness_probability: 100,
        normal_inbattle_weakness_enabled: false,
        normal_inbattle_ailment_target: "Person",
        normal_inbattle_ailment_target_enabled: false,

        normal_inbattle_customevent_id: 0,
        normal_inbattle_customevent_enabled: false,

        walkfield_use_common_hp: 0,
        walkfield_use_common_hp_enabled: false,
        walkfield_use_common_atp: 0,
        walkfield_use_common_atp_enabled: false,
    },
    methods: {
        GenerateJson: function () {
            let effects_dict = {};
        },
        LoadJson: function () {
            console.log(JSON.parse(this.json));
        }
    },
    computed: {
        usingInfieldParameters: function () {
            return this.normal_infield_hp_enabled || this.normal_infield_atp_enabled || this.normal_infield_dangerlevel_enabled ||
                this.normal_infield_accuracy_enabled || this.normal_infield_avoidance_enabled || this.normal_infield_attack_enabled ||
                this.normal_infield_agility_enabled || this.normal_infield_magicdefence_enabled || this.normal_infield_physicaldefence_enabled;
        },
        usingInbattleParameters: function () {
            return this.normal_inbattle_hp_enabled || this.normal_inbattle_atp_enabled || this.normal_inbattle_dangerlevel_enabled ||
                this.normal_inbattle_accuracy_enabled || this.normal_inbattle_avoidance_enabled || this.normal_inbattle_attack_enabled ||
                this.normal_inbattle_agility_enabled || this.normal_inbattle_magicdefence_enabled || this.normal_inbattle_physicaldefence_enabled;
        },
        usingInbattleAilments: function () {
            return this.normal_inbattle_poison_enabled || this.normal_inbattle_sleep_enabled || this.normal_inbattle_frostbite_enabled ||
                this.normal_inbattle_paralysis_enabled || this.normal_inbattle_bleeding_enabled || this.normal_inbattle_confusion_enabled ||
                this.normal_inbattle_blindness_enabled || this.normal_inbattle_weakness_enabled;
        },
        usingWalkFieldParameters: function () {
            return this.walkfield_use_common_hp_enabled || this.walkfield_use_common_atp_enabled;
        }
    }
});

