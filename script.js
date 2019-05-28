class Item {
    constructor() {
        this.json = "";

        this.id = -1;
        this.name = "未定義";
        this.category = "UseItem";
        this.can_use_in_field = false;
        this.can_use_in_battle = false;
        this.is_equipment = false;
        this.can_buy = true;
        this.buying_price = 0;
        this.selling_price = 0;

        this.normal_use = false;
        this.equipment = false;
        this.walk_field = false;
        this.every_turn = false;
        this.in_attack = false;
        this.in_be_attacked = false;

        this.normal_use_common_hp = 0;
        this.normal_use_common_hp_enabled = false;
        this.normal_use_common_atp = 0;
        this.normal_use_common_atp_enabled = false;
        this.normal_use_common_target = "Person";

        this.normal_infield_atp = 0;
        this.normal_infield_atp_enabled = false;
        this.normal_infield_hp = 0;
        this.normal_infield_hp_enabled = false;
        this.normal_infield_accuracy = 0;
        this.normal_infield_accuracy_enabled = false;
        this.normal_infield_avoidance = 0;
        this.normal_infield_avoidance_enabled = false;
        this.normal_infield_attack = 0;
        this.normal_infield_attack_enabled = false;
        this.normal_infield_agility = 0;
        this.normal_infield_agility_enabled = false;
        this.normal_infield_magicdefence = 0;
        this.normal_infield_magicdefence_enabled = false;
        this.normal_infield_physicaldefence = 0;
        this.normal_infield_physicaldefence_enabled = false;
        this.normal_infield_target = "Person";

        this.normal_infield_customevent_id = 0;
        this.normal_infield_customevent_enabled = false;

        this.normal_inbattle_hp = 0;
        this.normal_inbattle_hp_enabled = false;
        this.normal_inbattle_atp = 0;
        this.normal_inbattle_atp_enabled = false;
        this.normal_inbattle_accuracy = 0;
        this.normal_inbattle_accuracy_enabled = false;
        this.normal_inbattle_avoidance = 0;
        this.normal_inbattle_avoidance_enabled = false;
        this.normal_inbattle_attack = 0;
        this.normal_inbattle_attack_enabled = false;
        this.normal_inbattle_agility = 0;
        this.normal_inbattle_agility_enabled = false;
        this.normal_inbattle_magicdefence = 0;
        this.normal_inbattle_magicdefence_enabled = false;
        this.normal_inbattle_physicaldefence = 0;
        this.normal_inbattle_physicaldefence_enabled = false;
        this.normal_inbattle_target = "Person";

        this.normal_inbattle_poison_action = "Give";
        this.normal_inbattle_poison_probability = 100;
        this.normal_inbattle_poison_enabled = false;
        this.normal_inbattle_sleep_action = "Give";
        this.normal_inbattle_sleep_probability = 100;
        this.normal_inbattle_sleep_enabled = false;
        this.normal_inbattle_frostbite_action = "Give";
        this.normal_inbattle_frostbite_probability = 100;
        this.normal_inbattle_frostbite_enabled = false;
        this.normal_inbattle_paralysis_action = "Give";
        this.normal_inbattle_paralysis_probability = 100;
        this.normal_inbattle_paralysis_enabled = false;
        this.normal_inbattle_bleeding_action = "Give";
        this.normal_inbattle_bleeding_probability = 100;
        this.normal_inbattle_bleeding_enabled = false;
        this.normal_inbattle_confusion_action = "Give";
        this.normal_inbattle_confusion_probability = 100;
        this.normal_inbattle_confusion_enabled = false;
        this.normal_inbattle_blindness_action = "Give";
        this.normal_inbattle_blindness_probability = 100;
        this.normal_inbattle_blindness_enabled = false;
        this.normal_inbattle_weakness_action = "Give";
        this.normal_inbattle_weakness_probability = 100;
        this.normal_inbattle_weakness_enabled = false;
        this.normal_inbattle_ailment_target = "Person";

        this.normal_inbattle_customevent_id = 0;
        this.normal_inbattle_customevent_enabled = false;

        this.walkfield_common_hp = 0;
        this.walkfield_common_hp_enabled = false;
        this.walkfield_common_atp = 0;
        this.walkfield_common_atp_enabled = false;
        this.walkfield_customevent_id = 0;
        this.walkfield_customevent_enabled = false;
        this.walkfield_common_target = "Person";

        this.everyturn_common_hp = 0;
        this.everyturn_common_hp_enabled = false;
        this.everyturn_common_atp = 0;
        this.everyturn_common_atp_enabled = false;
        this.everyturn_customevent_id = 0;
        this.everyturn_customevent_enabled = false;

        this.everyturn_inbattle_hp = 0;
        this.everyturn_inbattle_hp_enabled = false;
        this.everyturn_inbattle_atp = 0;
        this.everyturn_inbattle_atp_enabled = false;
        this.everyturn_inbattle_accuracy = 0;
        this.everyturn_inbattle_accuracy_enabled = false;
        this.everyturn_inbattle_avoidance = 0;
        this.everyturn_inbattle_avoidance_enabled = false;
        this.everyturn_inbattle_attack = 0;
        this.everyturn_inbattle_attack_enabled = false;
        this.everyturn_inbattle_agility = 0;
        this.everyturn_inbattle_agility_enabled = false;
        this.everyturn_inbattle_magicdefence = 0;
        this.everyturn_inbattle_magicdefence_enabled = false;
        this.everyturn_inbattle_physicaldefence = 0;
        this.everyturn_inbattle_physicaldefence_enabled = false;
        this.everyturn_inbattle_target = "Person";
        this.everyturn_inbattle_target_enabled = false;

        this.everyturn_inbattle_poison_action = "Give";
        this.everyturn_inbattle_poison_probability = 100;
        this.everyturn_inbattle_poison_enabled = false;
        this.everyturn_inbattle_sleep_action = "Give";
        this.everyturn_inbattle_sleep_probability = 100;
        this.everyturn_inbattle_sleep_enabled = false;
        this.everyturn_inbattle_frostbite_action = "Give";
        this.everyturn_inbattle_frostbite_probability = 100;
        this.everyturn_inbattle_frostbite_enabled = false;
        this.everyturn_inbattle_paralysis_action = "Give";
        this.everyturn_inbattle_paralysis_probability = 100;
        this.everyturn_inbattle_paralysis_enabled = false;
        this.everyturn_inbattle_bleeding_action = "Give";
        this.everyturn_inbattle_bleeding_probability = 100;
        this.everyturn_inbattle_bleeding_enabled = false;
        this.everyturn_inbattle_confusion_action = "Give";
        this.everyturn_inbattle_confusion_probability = 100;
        this.everyturn_inbattle_confusion_enabled = false;
        this.everyturn_inbattle_blindness_action = "Give";
        this.everyturn_inbattle_blindness_probability = 100;
        this.everyturn_inbattle_blindness_enabled = false;
        this.everyturn_inbattle_weakness_action = "Give";
        this.everyturn_inbattle_weakness_probability = 100;
        this.everyturn_inbattle_weakness_enabled = false;
        this.everyturn_inbattle_ailment_target = "Person";
        this.everyturn_inbattle_ailment_target_enabled = false;

        this.everyturn_inbattle_customevent_id = 0;
        this.everyturn_inbattle_customevent_enabled = false;

        this.equipment_category = "Head";
        this.equipment_inbattle_hp = 0;
        this.equipment_inbattle_hp_enabled = false;
        this.equipment_inbattle_atp = 0;
        this.equipment_inbattle_atp_enabled = false;
        this.equipment_inbattle_accuracy = 0;
        this.equipment_inbattle_accuracy_enabled = false;
        this.equipment_inbattle_avoidance = 0;
        this.equipment_inbattle_avoidance_enabled = false;
        this.equipment_inbattle_attack = 0;
        this.equipment_inbattle_attack_enabled = false;
        this.equipment_inbattle_agility = 0;
        this.equipment_inbattle_agility_enabled = false;
        this.equipment_inbattle_magicdefence = 0;
        this.equipment_inbattle_magicdefence_enabled = false;
        this.equipment_inbattle_physicaldefence = 0;
        this.equipment_inbattle_physicaldefence_enabled = false;
        this.equipment_inbattle_target = "Person";
        this.equipment_inbattle_target_enabled = false;

        this.equipment_inbattle_customevent_id = 0;
        this.equipment_inbattle_customevent_enabled = false;

        this.inattack_common_hp = 0;
        this.inattack_common_hp_enabled = false;
        this.inattack_common_atp = 0;
        this.inattack_common_atp_enabled = false;
        this.inattack_customevent_id = 0;
        this.inattack_customevent_enabled = false;

        this.inattack_inbattle_hp = 0;
        this.inattack_inbattle_hp_enabled = false;
        this.inattack_inbattle_atp = 0;
        this.inattack_inbattle_atp_enabled = false;
        this.inattack_inbattle_accuracy = 0;
        this.inattack_inbattle_accuracy_enabled = false;
        this.inattack_inbattle_avoidance = 0;
        this.inattack_inbattle_avoidance_enabled = false;
        this.inattack_inbattle_attack = 0;
        this.inattack_inbattle_attack_enabled = false;
        this.inattack_inbattle_agility = 0;
        this.inattack_inbattle_agility_enabled = false;
        this.inattack_inbattle_magicdefence = 0;
        this.inattack_inbattle_magicdefence_enabled = false;
        this.inattack_inbattle_physicaldefence = 0;
        this.inattack_inbattle_physicaldefence_enabled = false;
        this.inattack_inbattle_target = "Person";
        this.inattack_inbattle_target_enabled = false;

        this.inattack_inbattle_poison_action = "Give";
        this.inattack_inbattle_poison_probability = 100;
        this.inattack_inbattle_poison_enabled = false;
        this.inattack_inbattle_sleep_action = "Give";
        this.inattack_inbattle_sleep_probability = 100;
        this.inattack_inbattle_sleep_enabled = false;
        this.inattack_inbattle_frostbite_action = "Give";
        this.inattack_inbattle_frostbite_probability = 100;
        this.inattack_inbattle_frostbite_enabled = false;
        this.inattack_inbattle_paralysis_action = "Give";
        this.inattack_inbattle_paralysis_probability = 100;
        this.inattack_inbattle_paralysis_enabled = false;
        this.inattack_inbattle_bleeding_action = "Give";
        this.inattack_inbattle_bleeding_probability = 100;
        this.inattack_inbattle_bleeding_enabled = false;
        this.inattack_inbattle_confusion_action = "Give";
        this.inattack_inbattle_confusion_probability = 100;
        this.inattack_inbattle_confusion_enabled = false;
        this.inattack_inbattle_blindness_action = "Give";
        this.inattack_inbattle_blindness_probability = 100;
        this.inattack_inbattle_blindness_enabled = false;
        this.inattack_inbattle_weakness_action = "Give";
        this.inattack_inbattle_weakness_probability = 100;
        this.inattack_inbattle_weakness_enabled = false;
        this.inattack_inbattle_ailment_target = "Person";
        this.inattack_inbattle_ailment_target_enabled = false;

        this.inattack_inbattle_customevent_id = 0;
        this.inattack_inbattle_customevent_enabled = false;

        this.inbeattack_common_hp = 0;
        this.inbeattack_common_hp_enabled = false;
        this.inbeattack_common_atp = 0;
        this.inbeattack_common_atp_enabled = false;
        this.inbeattack_customevent_id = 0;
        this.inbeattack_customevent_enabled = false;

        this.inbeattack_inbattle_hp = 0;
        this.inbeattack_inbattle_hp_enabled = false;
        this.inbeattack_inbattle_atp = 0;
        this.inbeattack_inbattle_atp_enabled = false;
        this.inbeattack_inbattle_accuracy = 0;
        this.inbeattack_inbattle_accuracy_enabled = false;
        this.inbeattack_inbattle_avoidance = 0;
        this.inbeattack_inbattle_avoidance_enabled = false;
        this.inbeattack_inbattle_attack = 0;
        this.inbeattack_inbattle_attack_enabled = false;
        this.inbeattack_inbattle_agility = 0;
        this.inbeattack_inbattle_agility_enabled = false;
        this.inbeattack_inbattle_magicdefence = 0;
        this.inbeattack_inbattle_magicdefence_enabled = false;
        this.inbeattack_inbattle_physicaldefence = 0;
        this.inbeattack_inbattle_physicaldefence_enabled = false;
        this.inbeattack_inbattle_target = "Person";
        this.inbeattack_inbattle_target_enabled = false;

        this.inbeattack_inbattle_poison_action = "Give";
        this.inbeattack_inbattle_poison_probability = 100;
        this.inbeattack_inbattle_poison_enabled = false;
        this.inbeattack_inbattle_sleep_action = "Give";
        this.inbeattack_inbattle_sleep_probability = 100;
        this.inbeattack_inbattle_sleep_enabled = false;
        this.inbeattack_inbattle_frostbite_action = "Give";
        this.inbeattack_inbattle_frostbite_probability = 100;
        this.inbeattack_inbattle_frostbite_enabled = false;
        this.inbeattack_inbattle_paralysis_action = "Give";
        this.inbeattack_inbattle_paralysis_probability = 100;
        this.inbeattack_inbattle_paralysis_enabled = false;
        this.inbeattack_inbattle_bleeding_action = "Give";
        this.inbeattack_inbattle_bleeding_probability = 100;
        this.inbeattack_inbattle_bleeding_enabled = false;
        this.inbeattack_inbattle_confusion_action = "Give";
        this.inbeattack_inbattle_confusion_probability = 100;
        this.inbeattack_inbattle_confusion_enabled = false;
        this.inbeattack_inbattle_blindness_action = "Give";
        this.inbeattack_inbattle_blindness_probability = 100;
        this.inbeattack_inbattle_blindness_enabled = false;
        this.inbeattack_inbattle_weakness_action = "Give";
        this.inbeattack_inbattle_weakness_probability = 100;
        this.inbeattack_inbattle_weakness_enabled = false;
        this.inbeattack_inbattle_ailment_target = "Person";
        this.inbeattack_inbattle_ailment_target_enabled = false;

        this.inbeattack_inbattle_customevent_id = 0;
        this.inbeattack_inbattle_customevent_enabled = false;
    }

    GenerateJson () {
        let e = {};
        let params = [];

        if (this.normal_use) {
            if (this.normal_use_common_hp_enabled) {
                params.push({Name: "HP", Value: this.normal_use_common_hp});
            }
            if (this.normal_use_common_atp_enabled) {
                params.push({Name: "ATP", Value: this.normal_use_common_atp});
            }
            if (this.usingNormalUseCommonParameters()) {
                this.AddElement(e, "NormalUse.Common.CurrentParameter", params);
                this.AddElement(e, "NormalUse.Common.CurrentParameterTarget", this.normal_use_common_target);
            }

            params = [];
            if (this.normal_infield_hp_enabled) {
                params.push({Name: "HP", Value: this.normal_infield_hp});
            }
            if (this.normal_infield_atp_enabled) {
                params.push({Name: "ATP", Value: this.normal_infield_atp});
            }
            if (this.normal_infield_accuracy_enabled) {
                params.push({Name: "Accuracy", Value: this.normal_infield_accuracy});
            }
            if (this.normal_infield_avoidance_enabled) {
                params.push({Name: "Avoidance", Value: this.normal_infield_avoidance});
            }
            if (this.normal_infield_attack_enabled) {
                params.push({Name: "Attack", Value: this.normal_infield_attack});
            }
            if (this.normal_infield_agility_enabled) {
                params.push({Name: "Agility", Value: this.normal_infield_agility});
            }
            if (this.normal_infield_magicdefence_enabled) {
                params.push({Name: "MagicDefence", Value: this.normal_infield_magicdefence});
            }
            if (this.normal_infield_physicaldefence_enabled) {
                params.push({Name: "PhysicalDefence", Value: this.normal_infield_physicaldefence});
            }
            if (this.usingInfieldParameters()) {
                this.AddElement(e, "NormalUse.InField.AbsoluteParameter", params);
                this.AddElement(e, "NormalUse.InField.AbsoluteParameterTarget", this.normal_infield_target);
            }

            if (this.normal_infield_customevent_enabled) {
                this.AddElement(e, "NormalUse.InField.CustomEvent", this.normal_infield_customevent_id);
            }

            params = [];
            if (this.normal_inbattle_hp_enabled) {
                params.push({Name: "HP", Value: this.normal_inbattle_hp});
            }
            if (this.normal_inbattle_atp_enabled) {
                params.push({Name: "ATP", Value: this.normal_inbattle_atp});
            }
            if (this.normal_inbattle_accuracy_enabled) {
                params.push({Name: "Accuracy", Value: this.normal_inbattle_accuracy});
            }
            if (this.normal_inbattle_avoidance_enabled) {
                params.push({Name: "Avoidance", Value: this.normal_inbattle_avoidance});
            }
            if (this.normal_inbattle_attack_enabled) {
                params.push({Name: "Attack", Value: this.normal_inbattle_attack});
            }
            if (this.normal_inbattle_agility_enabled) {
                params.push({Name: "Agility", Value: this.normal_inbattle_agility});
            }
            if (this.normal_inbattle_magicdefence_enabled) {
                params.push({Name: "MagicDefence", Value: this.normal_inbattle_magicdefence});
            }
            if (this.normal_inbattle_physicaldefence_enabled) {
                params.push({Name: "PhysicalDefence", Value: this.normal_inbattle_physicaldefence});
            }

            if (this.usingInbattleParameters()) {
                this.AddElement(e, "NormalUse.InBattle.TemporaryParameter", params);
                this.AddElement(e, "NormalUse.InBattle.TemporaryParameterTarget", this.normal_inbattle_target);
            }

            params = [];
            if (this.normal_inbattle_poison_enabled) {
                params.push({
                    Name: "Poison",
                    Action: this.normal_inbattle_poison_action,
                    Probability: this.normal_inbattle_poison_probability
                });
            }
            if (this.normal_inbattle_sleep_enabled) {
                params.push({
                    Name: "Sleep",
                    Action: this.normal_inbattle_sleep_action,
                    Probability: this.normal_inbattle_sleep_probability
                });
            }
            if (this.normal_inbattle_frostbite_enabled) {
                params.push({
                    Name: "Frostbite",
                    Action: this.normal_inbattle_frostbite_action,
                    Probability: this.normal_inbattle_frostbite_probability
                });
            }
            if (this.normal_inbattle_paralysis_enabled) {
                params.push({
                    Name: "Paralysis",
                    Action: this.normal_inbattle_paralysis_action,
                    Probability: this.normal_inbattle_paralysis_probability
                });
            }
            if (this.normal_inbattle_bleeding_enabled) {
                params.push({
                    Name: "Bleeding",
                    Action: this.normal_inbattle_bleeding_action,
                    Probability: this.normal_inbattle_bleeding_probability
                });
            }
            if (this.normal_inbattle_confusion_enabled) {
                params.push({
                    Name: "Confusion",
                    Action: this.normal_inbattle_confusion_action,
                    Probability: this.normal_inbattle_confusion_probability
                });
            }
            if (this.normal_inbattle_blindness_enabled) {
                params.push({
                    Name: "Blindness",
                    Action: this.normal_inbattle_blindness_action,
                    Probability: this.normal_inbattle_blindness_probability
                });
            }
            if (this.normal_inbattle_weakness_enabled) {
                params.push({
                    Name: "Weakness",
                    Action: this.normal_inbattle_weakness_action,
                    Probability: this.normal_inbattle_weakness_probability
                });
            }

            if (this.usingInbattleAilments()) {
                this.AddElement(e, "NormalUse.InBattle.StatusAilment", params);
                this.AddElement(e, "NormalUse.InBattle.AilmentTarget", this.normal_inbattle_ailment_target);
            }

            if (this.normal_inbattle_customevent_enabled) {
                this.AddElement(e, "NormalUse.InBattle.CustomEvent", this.normal_inbattle_customevent_id);
            }
        }
        if (this.equipment) {

        }
        if (this.walk_field) {
            params = [];
            if (this.walkfield_common_hp_enabled) {
                params.push({Name: "HP", Value: this.walkfield_common_hp});
            }
            if (this.walkfield_common_atp_enabled) {
                params.push({Name: "ATP", Value: this.walkfield_common_atp});
            }
            if (this.usingWalkFieldParameters()) {
                this.AddElement(e, "WalkField.CurrentParameter", params);
                this.AddElement(e, "WalkField.CurrentParameterTarget", this.walkfield_common_target);
            }
            if (this.walkfield_customevent_enabled) {
                this.AddElement(e, "WalkField.CustomEvent", this.walkfield_customevent_id);
            }
        }
        if (this.every_turn) {
            if (this.normal_use_common_hp_enabled) {
                params.push({Name: "HP", Value: this.normal_use_common_hp});
            }
            if (this.normal_use_common_atp_enabled) {
                params.push({Name: "ATP", Value: this.normal_use_common_atp});
            }
            if (this.usingNormalUseCommonParameters()) {
                this.AddElement(e, "NormalUse.Common.CurrentParameter", params);
                this.AddElement(e, "NormalUse.Common.CurrentParameterTarget", this.normal_use_common_target);
            }

            params = [];
            if (this.normal_infield_hp_enabled) {
                params.push({Name: "HP", Value: this.normal_infield_hp});
            }
            if (this.normal_infield_atp_enabled) {
                params.push({Name: "ATP", Value: this.normal_infield_atp});
            }
            if (this.normal_infield_accuracy_enabled) {
                params.push({Name: "Accuracy", Value: this.normal_infield_accuracy});
            }
            if (this.normal_infield_avoidance_enabled) {
                params.push({Name: "Avoidance", Value: this.normal_infield_avoidance});
            }
            if (this.normal_infield_attack_enabled) {
                params.push({Name: "Attack", Value: this.normal_infield_attack});
            }
            if (this.normal_infield_agility_enabled) {
                params.push({Name: "Agility", Value: this.normal_infield_agility});
            }
            if (this.normal_infield_magicdefence_enabled) {
                params.push({Name: "MagicDefence", Value: this.normal_infield_magicdefence});
            }
            if (this.normal_infield_physicaldefence_enabled) {
                params.push({Name: "PhysicalDefence", Value: this.normal_infield_physicaldefence});
            }
            if (this.usingInfieldParameters()) {
                this.AddElement(e, "NormalUse.InField.AbsoluteParameter", params);
                this.AddElement(e, "NormalUse.InField.AbsoluteParameterTarget", this.normal_infield_target);
            }

            if (this.normal_infield_customevent_enabled) {
                this.AddElement(e, "NormalUse.InField.CustomEvent", this.normal_infield_customevent_id);
            }

            params = [];
            if (this.normal_inbattle_hp_enabled) {
                params.push({Name: "HP", Value: this.normal_inbattle_hp});
            }
            if (this.normal_inbattle_atp_enabled) {
                params.push({Name: "ATP", Value: this.normal_inbattle_atp});
            }
            if (this.normal_inbattle_accuracy_enabled) {
                params.push({Name: "Accuracy", Value: this.normal_inbattle_accuracy});
            }
            if (this.normal_inbattle_avoidance_enabled) {
                params.push({Name: "Avoidance", Value: this.normal_inbattle_avoidance});
            }
            if (this.normal_inbattle_attack_enabled) {
                params.push({Name: "Attack", Value: this.normal_inbattle_attack});
            }
            if (this.normal_inbattle_agility_enabled) {
                params.push({Name: "Agility", Value: this.normal_inbattle_agility});
            }
            if (this.normal_inbattle_magicdefence_enabled) {
                params.push({Name: "MagicDefence", Value: this.normal_inbattle_magicdefence});
            }
            if (this.normal_inbattle_physicaldefence_enabled) {
                params.push({Name: "PhysicalDefence", Value: this.normal_inbattle_physicaldefence});
            }

            if (this.usingInbattleParameters()) {
                this.AddElement(e, "NormalUse.InBattle.TemporaryParameter", params);
                this.AddElement(e, "NormalUse.InBattle.TemporaryParameterTarget", this.normal_inbattle_target);
            }

            params = [];
            if (this.normal_inbattle_poison_enabled) {
                params.push({
                    Name: "Poison",
                    Action: this.normal_inbattle_poison_action,
                    Probability: this.normal_inbattle_poison_probability
                });
            }
            if (this.normal_inbattle_sleep_enabled) {
                params.push({
                    Name: "Sleep",
                    Action: this.normal_inbattle_sleep_action,
                    Probability: this.normal_inbattle_sleep_probability
                });
            }
            if (this.normal_inbattle_frostbite_enabled) {
                params.push({
                    Name: "Frostbite",
                    Action: this.normal_inbattle_frostbite_action,
                    Probability: this.normal_inbattle_frostbite_probability
                });
            }
            if (this.normal_inbattle_paralysis_enabled) {
                params.push({
                    Name: "Paralysis",
                    Action: this.normal_inbattle_paralysis_action,
                    Probability: this.normal_inbattle_paralysis_probability
                });
            }
            if (this.normal_inbattle_bleeding_enabled) {
                params.push({
                    Name: "Bleeding",
                    Action: this.normal_inbattle_bleeding_action,
                    Probability: this.normal_inbattle_bleeding_probability
                });
            }
            if (this.normal_inbattle_confusion_enabled) {
                params.push({
                    Name: "Confusion",
                    Action: this.normal_inbattle_confusion_action,
                    Probability: this.normal_inbattle_confusion_probability
                });
            }
            if (this.normal_inbattle_blindness_enabled) {
                params.push({
                    Name: "Blindness",
                    Action: this.normal_inbattle_blindness_action,
                    Probability: this.normal_inbattle_blindness_probability
                });
            }
            if (this.normal_inbattle_weakness_enabled) {
                params.push({
                    Name: "Weakness",
                    Action: this.normal_inbattle_weakness_action,
                    Probability: this.normal_inbattle_weakness_probability
                });
            }

            if (this.usingInbattleAilments()) {
                this.AddElement(e, "NormalUse.InBattle.StatusAilment", params);
                this.AddElement(e, "NormalUse.InBattle.AilmentTarget", this.normal_inbattle_ailment_target);
            }

            if (this.normal_inbattle_customevent_enabled) {
                this.AddElement(e, "NormalUse.InBattle.CustomEvent", this.normal_inbattle_customevent_id);
            }
        }
        if (this.in_attack) {

        }
        if (this.in_be_attacked) {

        }
        this.json = JSON.stringify(e);
    }
    LoadJson () {
    }
    ReadProperties () {

    }
    AddElement (dict, keystr, val) {
        let keys = keystr.split('.');
        let ref = dict;
        keys.forEach((key, index) => {
            if (keys.length > index + 1) {
                if (!(key in ref)) {
                    ref[key] = {};
                }
            } else {
                ref[key] = val;
            }
            ref = ref[key];
        });
    }
    usingNormalUseCommonParameters () {
        return this.normal_use_common_hp_enabled || this.normal_use_common_atp_enabled;
    }
    usingInfieldParameters () {
        return this.normal_infield_hp_enabled || this.normal_infield_atp_enabled ||
            this.normal_infield_accuracy_enabled || this.normal_infield_avoidance_enabled || this.normal_infield_attack_enabled ||
            this.normal_infield_agility_enabled || this.normal_infield_magicdefence_enabled || this.normal_infield_physicaldefence_enabled;
    }
    usingInbattleParameters () {
        return this.normal_inbattle_hp_enabled || this.normal_inbattle_atp_enabled ||
            this.normal_inbattle_accuracy_enabled || this.normal_inbattle_avoidance_enabled || this.normal_inbattle_attack_enabled ||
            this.normal_inbattle_agility_enabled || this.normal_inbattle_magicdefence_enabled || this.normal_inbattle_physicaldefence_enabled;
    }
    usingInbattleAilments () {
        return this.normal_inbattle_poison_enabled || this.normal_inbattle_sleep_enabled || this.normal_inbattle_frostbite_enabled ||
            this.normal_inbattle_paralysis_enabled || this.normal_inbattle_bleeding_enabled || this.normal_inbattle_confusion_enabled ||
            this.normal_inbattle_blindness_enabled || this.normal_inbattle_weakness_enabled;
    }
    usingWalkFieldParameters () {
        return this.walkfield_common_hp_enabled || this.walkfield_common_atp_enabled;
    }
    usingWalkingFieldInbattleParameters () {
        return this.everyturn_inbattle_hp_enabled || this.everyturn_inbattle_atp_enabled ||
            this.everyturn_inbattle_accuracy_enabled || this.everyturn_inbattle_avoidance_enabled || this.everyturn_inbattle_attack_enabled ||
            this.everyturn_inbattle_agility_enabled || this.everyturn_inbattle_magicdefence_enabled || this.everyturn_inbattle_physicaldefence_enabled;
    }
    usingEveryturnCommonParameters () {
        return this.everyturn_common_hp_enabled || this.everyturn_common_atp_enabled;
    }
    usingEveryturnInbattleAilments () {
        return this.everyturn_inbattle_poison_enabled || this.everyturn_inbattle_sleep_enabled || this.everyturn_inbattle_frostbite_enabled ||
            this.everyturn_inbattle_paralysis_enabled || this.everyturn_inbattle_bleeding_enabled || this.everyturn_inbattle_confusion_enabled ||
            this.everyturn_inbattle_blindness_enabled || this.everyturn_inbattle_weakness_enabled;
    }
    usingInattackCommonParameters () {
        return this.inattack_common_hp_enabled || this.inattack_common_atp_enabled;
    }
    usingInattackInbattleParameters () {
        return this.inattack_inbattle_hp_enabled || this.inattack_inbattle_atp_enabled ||
            this.inattack_inbattle_accuracy_enabled || this.inattack_inbattle_avoidance_enabled || this.inattack_inbattle_attack_enabled ||
            this.inattack_inbattle_agility_enabled || this.inattack_inbattle_magicdefence_enabled || this.inattack_inbattle_physicaldefence_enabled;
    }
    usingInattackInbattleAilments () {
        return this.inattack_inbattle_poison_enabled || this.inattack_inbattle_sleep_enabled || this.inattack_inbattle_frostbite_enabled ||
            this.inattack_inbattle_paralysis_enabled || this.inattack_inbattle_bleeding_enabled || this.inattack_inbattle_confusion_enabled ||
            this.inattack_inbattle_blindness_enabled || this.inattack_inbattle_weakness_enabled;
    }
    usingInbeattackCommonParameters () {
        return this.inbeattack_common_hp_enabled || this.inbeattack_common_atp_enabled;
    }
    usingInbeattackInbattleParameters () {
        return this.inbeattack_inbattle_hp_enabled || this.inbeattack_inbattle_atp_enabled ||
            this.inbeattack_inbattle_accuracy_enabled || this.inbeattack_inbattle_avoidance_enabled || this.inbeattack_inbattle_attack_enabled ||
            this.inbeattack_inbattle_agility_enabled || this.inbeattack_inbattle_magicdefence_enabled || this.inbeattack_inbattle_physicaldefence_enabled;
    }
    usingInbeattackInbattleAilments () {
        return this.inbeattack_inbattle_poison_enabled || this.inbeattack_inbattle_sleep_enabled || this.inbeattack_inbattle_frostbite_enabled ||
            this.inbeattack_inbattle_paralysis_enabled || this.inbeattack_inbattle_bleeding_enabled || this.inbeattack_inbattle_confusion_enabled ||
            this.inbeattack_inbattle_blindness_enabled || this.inbeattack_inbattle_weakness_enabled;
    }
    usingEquipmentInbattleParameters () {
        return this.equipment_inbattle_hp_enabled || this.equipment_inbattle_atp_enabled ||
            this.equipment_inbattle_accuracy_enabled || this.equipment_inbattle_avoidance_enabled || this.equipment_inbattle_attack_enabled ||
            this.equipment_inbattle_agility_enabled || this.equipment_inbattle_magicdefence_enabled || this.equipment_inbattle_physicaldefence_enabled;
    }
}

new Vue({
    el: "#app",
    data: {
        mode: "list",
        items: [],
        item: null,

        item_categories: ['Weapon', 'Armor', 'Food', 'UseItem', 'Valuables', 'Other'],
        infield_targets: ['Person', 'Party'],
        inbattle_targets: ['Person', 'Around', 'Party'],
        inbattle_ailment_types: ['Give', 'Clear'],
        probabilities: ['Absolutely', 'Probably', 'Maybe', 'Possibly'],
        equipment_categories: ['Head', 'Body', 'Shield', 'Accessory'],
    },
    created: function() {
        this.addItem();
        this.item = this.items[0];
    },
    methods: {
        itemCompare: function(a, b) {
            return a.id - b.id;
        },
        addItem: function() {
            let new_item = new Item();
            let found = false;
            this.items.some((e, i) => {
                if (e.id !== i) {
                    new_item.id = i;
                    found = true;
                    return true;
                }
            });
            if (!found) {
                new_item.id = this.items.length;
            }
            this.items.push(new_item);
            this.items.sort(this.itemCompare);
        }
        ,
        removeItem: function(index) {
            this.items.splice(index, 1);
        },
        toEditItem: function (index) {
            this.item = this.items[index];
            this.mode = "edit";
        },
        toList: function () {
            this.mode = "list";
        }
    },
    computed: {
    }
});

