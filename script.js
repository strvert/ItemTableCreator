class Item {
    constructor() {
        this.json = "";

        this.id = -1;
        this.name = "";
        this.description = "";
        this.attribute = "None";
        this.category = "UseItem";
        this.can_use_in_field = true;
        this.can_use_in_battle = false;
        this.is_equipment = false;
        this.can_selling = true;
        this.buying_price = 0;
        this.selling_price = 0;

        this.normal_use = false;
        this.equipment = false;
        this.walk_field = false;
        this.every_turn = false;
        this.in_attack = false;
        this.in_be_attacked = false;

        this.current_param_categories = ['HP', 'ATP'];
        this.current_param_category_labels = ['HP', 'ATP'];
        this.absolute_param_categories = ['HP', 'ATP', 'Accuracy', 'Avoidance', 'Attack', 'Agility', 'MagicDefence', 'PhysicalDefence'];
        this.absolute_param_category_labels = ['HP', 'ATP', '命中力', '回避力', '攻撃力', '敏捷性', '耐魔力', '防御力'];
        this.ailment_param_categories = ['Poison', 'Sleep', 'Frostbite', 'Paralysis', 'Bleeding', 'Confusion', 'Blindness', 'Weakness'];
        this.ailment_param_category_labels = ['毒', '睡眠', '凍傷', '麻痺', '出血', '錯乱', '盲目', '脱力'];

        this.normal_common_params = {};
        this.current_param_categories.forEach((name) => {
            this.normal_common_params[name] = {value: 0, enabled: false};
        });
        this.normal_common_target = "Person";

        this.normal_infield_params = {};
        this.absolute_param_categories.forEach((name) => {
            this.normal_infield_params[name] = {value: 0, enabled: false};
        });
        this.normal_infield_target = "Person";
        this.normal_infield_customevent = {value: 0, enabled: false};

        this.normal_inbattle_params = {};
        this.absolute_param_categories.forEach((name) => {
            this.normal_inbattle_params[name] = {value: 0, enabled: false};
        });
        this.normal_inbattle_target = "Person";

        this.normal_ailment_params = {};
        this.ailment_param_categories.forEach((name) => {
            this.normal_ailment_params[name] = {action: "Give", probability: 100, enabled: false}
        });
        this.normal_inbattle_ailment_target = "Person";
        this.normal_inbattle_customevent = {value: 0, enabled: false};

        this.equipment_category = "Head";
        this.equipment_params = {};
        this.absolute_param_categories.forEach((name) => {
            this.equipment_params[name] = {value: 0, enabled: false};
        });

        this.everyturn_common_params = {};
        this.current_param_categories.forEach((name) => {
            this.everyturn_common_params[name] = {value: 0, enabled: false};
        });
        this.everyturn_common_target = "Person";

        this.everyturn_inbattle_params = {};
        this.absolute_param_categories.forEach((name) => {
            this.everyturn_inbattle_params[name] = {value: 0, enabled: false};
        });
        this.everyturn_inbattle_target = "Person";

        this.everyturn_ailment_params = {};
        this.ailment_param_categories.forEach((name) => {
            this.everyturn_ailment_params[name] = {action: "Give", probability: 100, enabled: false};
        });
        this.everyturn_ailment_target = "Person";
        this.everyturn_customevent = {value: 0, enabled: false};

        this.inattack_common_params = {};
        this.current_param_categories.forEach((name) => {
            this.inattack_common_params[name] = {value: 0, enabled: false};
        });
        this.inattack_common_target = "Person";

        this.inattack_inbattle_params = {};
        this.absolute_param_categories.forEach((name) => {
            this.inattack_inbattle_params[name] = {value: 0, enabled: false};
        });
        this.inattack_inbattle_target = "Person";

        this.inattack_ailment_params = {};
        this.ailment_param_categories.forEach((name) => {
            this.inattack_ailment_params[name] = {action: "Give", probability: 100, enabled: false};
        });
        this.inattack_inbattle_ailment_target = "Person";
        this.inattack_inbattle_customevent = {value: 0, enabled: false};

        this.inbeattack_common_params = {};
        this.current_param_categories.forEach((name) => {
            this.inbeattack_common_params[name] = {value: 0, enabled: false};
        });
        this.inbeattack_common_target = "Person";

        this.inbeattack_inbattle_params = {};
        this.absolute_param_categories.forEach((name) => {
            this.inbeattack_inbattle_params[name] = {value: 0, enabled: false};
        });
        this.inbeattack_inbattle_target = "Person";

        this.inbeattack_ailment_params = {};
        this.ailment_param_categories.forEach((name) => {
            this.inbeattack_ailment_params[name] = {action: "Give", probability: 100, enabled: false};
        });
        this.inbeattack_ailment_target = "Person";
        this.inbeattack_inbattle_customevent = {value: 0, enabled: false};

        this.walkfield_common_params = {};
        this.current_param_categories.forEach((name) => {
            this.walkfield_common_params[name] = {value: 0, enabled: false};
        });
        this.walkfield_common_target = "Person";
        this.walkfield_customevent = {value: 0, enabled: false};
    }

    checkUsing(params) {
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                if (params[key]['enabled']) {
                    return true;
                }
            }
        }
        return false;
    }

    GenerateJson() {
        let e = {};
        let params = [];

        if (this.normal_use) {
            params = [];
            for (let key in this.normal_common_params) {
                if (this.normal_common_params.hasOwnProperty(key)) {
                    if (this.normal_common_params[key].enabled) {
                        params.push({Name: key, Value: this.normal_common_params[key]['value']});
                    }
                }
            }
            if (this.checkUsing(this.normal_common_params)) {
                this.AddElement(e, "NormalUse.Common.CurrentParameter", params);
                this.AddElement(e, "NormalUse.Common.CurrentParameterTarget", this.normal_common_target);
            }

            params = [];
            for (let key in this.normal_infield_params) {
                if (this.normal_infield_params.hasOwnProperty(key)) {
                    if (this.normal_infield_params[key].enabled) {
                        params.push({Name: key, Value: this.normal_infield_params[key]['value']})
                    }
                }
            }
            if (this.checkUsing(this.normal_infield_params)) {
                this.AddElement(e, "NormalUse.InField.AbsoluteParameter", params);
                this.AddElement(e, "NormalUse.InField.AbsoluteParameterTarget", this.normal_infield_target);
            }

            if (this.normal_infield_customevent.enabled) {
                this.AddElement(e, "NormalUse.InField.CustomEvent", this.normal_infield_customevent.value);
            }

            params = [];
            for (let key in this.normal_inbattle_params) {
                if (this.normal_inbattle_params.hasOwnProperty(key)) {
                    if (this.normal_inbattle_params[key].enabled){
                        params.push({Name: key, Value: this.normal_inbattle_params[key]['value']})
                    }
                }
            }

            if (this.checkUsing()) {
                this.AddElement(e, "NormalUse.InBattle.TemporaryParameter", params);
                this.AddElement(e, "NormalUse.InBattle.TemporaryParameterTarget", this.normal_inbattle_target);
            }

            params = [];
            for (let key in this.normal_ailment_params) {
                if (this.normal_ailment_params.hasOwnProperty(key)) {
                    if (this.normal_ailment_params[key].enabled){
                        params.push({
                            Name: key,
                            Action: this.normal_ailment_params[key].action,
                            Probability: this.normal_ailment_params[key].probability
                        });
                    }
                }
            }

            if (this.checkUsing(this.normal_ailment_params)) {
                this.AddElement(e, "NormalUse.InBattle.StatusAilment", params);
                this.AddElement(e, "NormalUse.InBattle.AilmentTarget", this.normal_inbattle_ailment_target);
            }

            if (this.normal_inbattle_customevent.enabled) {
                this.AddElement(e, "NormalUse.InBattle.CustomEvent", this.normal_inbattle_customevent.value);
            }
        }

        if (this.is_equipment) {
            if (this.equipment) {
                this.AddElement(e, "Equipment.Category", this.equipment_category);

                params = [];
                for (let key in this.equipment_params) {
                    if (this.equipment_params.hasOwnProperty(key)) {
                        if (this.equipment_params[key].enabled){
                            params.push({Name: key, Value: this.equipment_params[key]['value']});
                        }
                    }
                }

                if (this.checkUsing(this.equipment_params)) {
                    this.AddElement(e, "Equipment.TemporaryParameter", params);
                }
            }
            if (this.walk_field) {
                params = [];
                for (let key in this.walkfield_common_params) {
                    if (this.walkfield_common_params.hasOwnProperty(key)) {
                        if (this.walkfield_common_params[key].enabled) {
                            params.push({Name: key, Value: this.walkfield_common_params[key]});
                        }
                    }
                }
                if (this.checkUsing(this.walkfield_common_params)) {
                    this.AddElement(e, "WalkField.CurrentParameter", params);
                    this.AddElement(e, "WalkField.CurrentParameterTarget", this.walkfield_common_target);
                }
                if (this.walkfield_customevent.enabled) {
                    this.AddElement(e, "WalkField.CustomEvent", this.walkfield_customevent.value);
                }
            }
            if (this.every_turn) {
                params = [];
                for (let key in this.everyturn_common_params) {
                    if (this.everyturn_common_params.hasOwnProperty(key)) {
                        if (this.everyturn_common_params[key].enabled) {
                            params.push({Name: key, Value: this.everyturn_common_params[key]});
                        }
                    }
                }
                if (this.checkUsing(this.everyturn_common_params)) {
                    this.AddElement(e, "EveryTurn.CurrentParameter", params);
                    this.AddElement(e, "EveryTurn.CurrentParameterTarget", this.everyturn_common_target);
                }

                params = [];
                for (let key in this.everyturn_inbattle_params) {
                    if (this.everyturn_inbattle_params.hasOwnProperty(key)) {
                        if (this.everyturn_inbattle_params[key].enabled){
                            params.push({Name: key, Value: this.everyturn_inbattle_params[key]['value']})
                        }
                    }
                }

                if (this.checkUsing(this.everyturn_inbattle_params)) {
                    this.AddElement(e, "EveryTurn.TemporaryParameter", params);
                    this.AddElement(e, "EveryTurn.TemporaryParameterTarget", this.everyturn_inbattle_target);
                }

                params = [];
                for (let key in this.everyturn_ailment_params) {
                    if (this.everyturn_ailment_params.hasOwnProperty(key)) {
                        if (this.everyturn_ailment_params[key].enabled){
                            params.push({
                                Name: key,
                                Action: this.everyturn_ailment_params[key].action,
                                Probability: this.everyturn_ailment_params[key].probability
                            });
                        }
                    }
                }

                if (this.checkUsing(this.everyturn_ailment_params)) {
                    this.AddElement(e, "EveryTurn.StatusAilment", params);
                    this.AddElement(e, "EveryTurn.AilmentTarget", this.everyturn_ailment_target);
                }

                if (this.everyturn_customevent.enabled) {
                    this.AddElement(e, "EveryTurn.CustomEvent", this.everyturn_customevent.value);
                }
            }
            if (this.in_attack) {
                params = [];
                for (let key in this.inattack_common_params) {
                    if (this.inattack_common_params.hasOwnProperty(key)) {
                        if (this.inattack_common_params[key].enabled) {
                            params.push({Name: key, Value: this.inattack_common_params[key]});
                        }
                    }
                }
                if (this.checkUsing(this.inattack_common_params)) {
                    this.AddElement(e, "InAttack.CurrentParameter", params);
                    this.AddElement(e, "InAttack.CurrentParameterTarget", this.inattack_common_target);
                }

                params = [];
                for (let key in this.inattack_inbattle_params) {
                    if (this.inattack_inbattle_params.hasOwnProperty(key)) {
                        if (this.inattack_inbattle_params[key].enabled){
                            params.push({Name: key, Value: this.inattack_inbattle_params[key]['value']})
                        }
                    }
                }

                if (this.checkUsing(this.inattack_inbattle_params)) {
                    this.AddElement(e, "InAttack.TemporaryParameter", params);
                    this.AddElement(e, "InAttack.TemporaryParameterTarget", this.inattack_inbattle_target);
                }

                params = [];
                for (let key in this.inattack_ailment_params) {
                    if (this.inattack_ailment_params.hasOwnProperty(key)) {
                        if (this.inattack_ailment_params[key].enabled){
                            params.push({
                                Name: key,
                                Action: this.inattack_ailment_params[key].action,
                                Probability: this.inattack_ailment_params[key].probability
                            });
                        }
                    }
                }

                if (this.checkUsing(this.inattack_ailment_params)) {
                    this.AddElement(e, "InAttack.StatusAilment", params);
                    this.AddElement(e, "InAttack.AilmentTarget", this.inattack_inbattle_ailment_target);
                }

                if (this.inattack_inbattle_customevent.enabled) {
                    this.AddElement(e, "InAttack.CustomEvent", this.inattack_inbattle_customevent.value);
                }
            }
            if (this.in_be_attacked) {
                params = [];
                for (let key in this.inbeattack_common_params) {
                    if (this.inbeattack_common_params.hasOwnProperty(key)) {
                        if (this.inbeattack_common_params[key].enabled) {
                            params.push({Name: key, Value: this.inbeattack_common_params[key]});
                        }
                    }
                }
                if (this.checkUsing(this.inbeattack_common_params)) {
                    this.AddElement(e, "inbeattack.CurrentParameter", params);
                    this.AddElement(e, "inbeattack.CurrentParameterTarget", this.inbeattack_common_target);
                }

                params = [];
                for (let key in this.inbeattack_inbattle_params) {
                    if (this.inbeattack_inbattle_params.hasOwnProperty(key)) {
                        if (this.inbeattack_inbattle_params[key].enabled){
                            params.push({Name: key, Value: this.inbeattack_inbattle_params[key]['value']})
                        }
                    }
                }

                if (this.checkUsing(this.inbeattack_inbattle_params)) {
                    this.AddElement(e, "inbeattack.TemporaryParameter", params);
                    this.AddElement(e, "inbeattack.TemporaryParameterTarget", this.inbeattack_inbattle_target);
                }

                params = [];
                for (let key in this.inbeattack_ailment_params) {
                    if (this.inbeattack_ailment_params.hasOwnProperty(key)) {
                        if (this.inbeattack_ailment_params[key].enabled){
                            params.push({
                                Name: key,
                                Action: this.inbeattack_ailment_params[key].action,
                                Probability: this.inbeattack_ailment_params[key].probability
                            });
                        }
                    }
                }

                if (this.checkUsing(this.inbeattack_ailment_params)) {
                    this.AddElement(e, "inbeattack.StatusAilment", params);
                    this.AddElement(e, "inbeattack.AilmentTarget", this.inbeattack_ailment_target);
                }

                if (this.inbeattack_inbattle_customevent.enabled) {
                    this.AddElement(e, "inbeattack.CustomEvent", this.inbeattack_inbattle_customevent.value);
                }
            }
        }
        return JSON.stringify(e);
    }

    LoadJson(json) {
        let parsed = JSON.parse(json);
        if ("NormalUse" in parsed) {
            this.normal_use = true;
            let normal = parsed.NormalUse;
            if ("Common" in normal) {
                let common = normal.Common;
                if ("CurrentParameter" in common) {
                    let current = common.CurrentParameter;
                    current.forEach((data) => {
                        switch (data.Name) {
                            case "HP":
                                this.normal_common_params.HP.enabled = true;
                                this.normal_common_params.HP.value = data.Value;
                                break;
                            case "ATP":
                                this.normal_common_params.ATP.enabled = true;
                                this.normal_common_params.ATP.value = data.Value;
                                break;
                        }
                    });
                }
                if ("CurrentParameterTarget" in common) {
                    this.normal_common_target = common.CurrentParameterTarget;
                }
            }
            if ("InField" in normal) {
                let infield = normal.InField;
                if ("AbsoluteParameter" in infield) {
                    let absparam = infield.AbsoluteParameter;
                    absparam.forEach((data) => {
                        switch (data.Name) {
                            case "HP":
                                this.normal_infield_hp_enabled = true;
                                this.normal_infield_hp = data.Value;
                                break;
                            case "ATP":
                                this.normal_infield_atp_enabled = true;
                                this.normal_infield_atp = data.Value;
                                break;
                            case "Accuracy":
                                this.normal_infield_accuracy_enabled = true;
                                this.normal_infield_accuracy = data.Value;
                                break;
                            case "Avoidance":
                                this.normal_infield_avoidance_enabled = true;
                                this.normal_infield_avoidance = data.Value;
                                break;
                            case "Agility":
                                this.normal_infield_agility_enabled = true;
                                this.normal_infield_agility = data.Value;
                                break;
                            case "MagicDefence":
                                this.normal_infield_magicdefence_enabled = true;
                                this.normal_infield_magicdefence = data.Value;
                                break;
                            case "PhysicalDefence":
                                this.normal_infield_physicaldefence_enabled = true;
                                this.normal_infield_physicaldefence = data.Value;
                                break;
                        }
                    });
                }
                if ("AbsoluteParameterTarget" in infield) {
                    this.normal_infield_target = infield.AbsoluteParameterTarget;
                }
                if ("CustomEvent" in infield) {
                    this.normal_infield_customevent_enabled = true;
                    this.normal_infield_customevent_id = infield.CustomEvent
                }
            }
            if ("InBattle" in normal) {

            }
        }
        console.log(parsed);
    }

    GenerateRow() {
        let row = {};
        row['Name'] = this.id.toString();
        row['itemName'] = this.name;
        row['category'] = this.category;
        row['description'] = this.description;
        row['attribute'] = this.attribute;
        row['canUseInField'] = this.can_use_in_field;
        row['canUseInBattle'] = this.can_use_in_battle;
        row['isEquipment'] = this.is_equipment;
        row['canSell'] = this.can_selling;
        row['buyingPrice'] = this.buying_price;
        row['sellingPrice'] = this.selling_price;
        row['effects'] = this.GenerateJson();
        return row;
    }

    ReadProperties() {

    }

    AddElement(dict, keystr, val) {
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

    usingWalkFieldParameters() {
        return this.walkfield_common_hp_enabled || this.walkfield_common_atp_enabled;
    }

    usingWalkingFieldInbattleParameters() {
        return this.everyturn_inbattle_hp_enabled || this.everyturn_inbattle_atp_enabled ||
            this.everyturn_inbattle_accuracy_enabled || this.everyturn_inbattle_avoidance_enabled || this.everyturn_inbattle_attack_enabled ||
            this.everyturn_inbattle_agility_enabled || this.everyturn_inbattle_magicdefence_enabled || this.everyturn_inbattle_physicaldefence_enabled;
    }

    usingEveryturnCommonParameters() {
        return this.everyturn_common_hp_enabled || this.everyturn_common_atp_enabled;
    }

    usingEveryturnInbattleParameters() {
        return this.everyturn_inbattle_hp_enabled || this.everyturn_inbattle_atp_enabled ||
            this.everyturn_inbattle_accuracy_enabled || this.everyturn_inbattle_avoidance_enabled || this.everyturn_inbattle_attack_enabled ||
            this.everyturn_inbattle_agility_enabled || this.everyturn_inbattle_magicdefence_enabled || this.everyturn_inbattle_physicaldefence_enabled;
    }

    usingEveryturnInbattleAilments() {
        return this.everyturn_inbattle_poison_enabled || this.everyturn_inbattle_sleep_enabled || this.everyturn_inbattle_frostbite_enabled ||
            this.everyturn_inbattle_paralysis_enabled || this.everyturn_inbattle_bleeding_enabled || this.everyturn_inbattle_confusion_enabled ||
            this.everyturn_inbattle_blindness_enabled || this.everyturn_inbattle_weakness_enabled;
    }

    usingInattackCommonParameters() {
        return this.inattack_common_hp_enabled || this.inattack_common_atp_enabled;
    }

    usingInattackInbattleParameters() {
        return this.inattack_inbattle_hp_enabled || this.inattack_inbattle_atp_enabled ||
            this.inattack_inbattle_accuracy_enabled || this.inattack_inbattle_avoidance_enabled || this.inattack_inbattle_attack_enabled ||
            this.inattack_inbattle_agility_enabled || this.inattack_inbattle_magicdefence_enabled || this.inattack_inbattle_physicaldefence_enabled;
    }

    usingInattackInbattleAilments() {
        return this.inattack_inbattle_poison_enabled || this.inattack_inbattle_sleep_enabled || this.inattack_inbattle_frostbite_enabled ||
            this.inattack_inbattle_paralysis_enabled || this.inattack_inbattle_bleeding_enabled || this.inattack_inbattle_confusion_enabled ||
            this.inattack_inbattle_blindness_enabled || this.inattack_inbattle_weakness_enabled;
    }

    usingInbeattackCommonParameters() {
        return this.inbeattack_common_hp_enabled || this.inbeattack_common_atp_enabled;
    }

    usingInbeattackInbattleParameters() {
        return this.inbeattack_inbattle_hp_enabled || this.inbeattack_inbattle_atp_enabled ||
            this.inbeattack_inbattle_accuracy_enabled || this.inbeattack_inbattle_avoidance_enabled || this.inbeattack_inbattle_attack_enabled ||
            this.inbeattack_inbattle_agility_enabled || this.inbeattack_inbattle_magicdefence_enabled || this.inbeattack_inbattle_physicaldefence_enabled;
    }

    usingInbeattackInbattleAilments() {
        return this.inbeattack_inbattle_poison_enabled || this.inbeattack_inbattle_sleep_enabled || this.inbeattack_inbattle_frostbite_enabled ||
            this.inbeattack_inbattle_paralysis_enabled || this.inbeattack_inbattle_bleeding_enabled || this.inbeattack_inbattle_confusion_enabled ||
            this.inbeattack_inbattle_blindness_enabled || this.inbeattack_inbattle_weakness_enabled;
    }

    usingEquipmentInbattleParameters() {
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
        export_dialog: false,
        csv_data: "",

        item_attribute: ['None', 'Void', 'Earth', 'Water', 'Lightning', 'Wind', 'Ice', 'Flame'],
        item_categories: ['Weapon', 'Armor', 'Food', 'UseItem', 'Valuables', 'Other'],
        infield_targets: ['Person', 'Party'],
        inbattle_targets: ['Person', 'Around', 'Party'],
        inbattle_ailment_types: ['Give', 'Clear'],
        probabilities: ['Absolutely', 'Probably', 'Maybe', 'Possibly'],
        equipment_categories: ['Head', 'Body', 'Shield', 'Accessory'],
    },
    created: function () {
        this.addItem();
        this.item = this.items[0];
    },
    methods: {
        itemCompare: function (a, b) {
            return a.id - b.id;
        },
        addItem: function () {
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
        removeItem: function (index) {
            this.items.splice(index, 1);
        },
        toEditItem: function (index) {
            this.item = this.items[index];
            this.mode = "edit";
        },
        toList: function () {
            this.mode = "list";
        },
        generateCSV: function () {
            let rows = [];
            this.items.forEach((item) => {
                rows.push(item.GenerateRow());
            });
            console.log(JSON.stringify(rows));
            return JSON.stringify(rows);
        },
        exportCSV: function () {
            let csv = this.generateCSV();
            let blob = new Blob([csv], {type: "text/plain"});
            let a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.target = "_blank";
            a.download = "ItemTable.json";
            a.click();
        },
        copyCSV: function () {

        },
        clickImport: function () {
            this.$refs.import.click();
        },
        onChangeFile: function (e) {
            let files = e.target.files;
            if (files !== undefined) {
                let reader = new FileReader();
                reader.onload = () => {
                    let result = reader.result;
                    this.importData(JSON.parse(result));
                };
                reader.readAsText(files[0]);
            }
        },
        importData: function (data) {
            this.items = [];
            data.forEach((row, index) => {
                let item = new Item();
                item.id = row.Name;
                item.name = row.itemName;
                item.category = row.category;
                item.description = row.description;
                item.attribute = row.attribute;
                item.can_use_in_field = row.canUseInField;
                item.can_use_in_battle = row.canUseInBattle;
                item.is_equipment = row.isEquipment;
                item.can_selling = row.canSell;
                item.buying_price = row.buyingPrice;
                item.selling_price = row.sellingPrice;
                item.LoadJson(row.effects);
                this.items.push(item);
            });
        }
    },
    computed: {}
});

