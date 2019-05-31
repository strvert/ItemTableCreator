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

        this.normal_ailment_params = {};
        this.ailment_param_categories.forEach((name) => {
            this.normal_ailment_params[name] = {action: "Give", probability: 100, enabled: false}
        });
        this.normal_inbattle_target = "Person";
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
                    if (this.normal_inbattle_params[key].enabled) {
                        params.push({Name: key, Value: this.normal_inbattle_params[key]['value']})
                    }
                }
            }

            if (this.checkUsing(this.normal_inbattle_params)) {
                this.AddElement(e, "NormalUse.InBattle.TemporaryParameter", params);
                this.AddElement(e, "NormalUse.InBattle.TemporaryParameterTarget", this.normal_inbattle_target);
            }

            params = [];
            for (let key in this.normal_ailment_params) {
                if (this.normal_ailment_params.hasOwnProperty(key)) {
                    if (this.normal_ailment_params[key].enabled) {
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
                this.AddElement(e, "NormalUse.InBattle.Target", this.normal_inbattle_target);
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
                        if (this.equipment_params[key].enabled) {
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
                            params.push({Name: key, Value: this.walkfield_common_params[key].value});
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
                            params.push({Name: key, Value: this.everyturn_common_params[key].value});
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
                        if (this.everyturn_inbattle_params[key].enabled) {
                            params.push({Name: key, Value: this.everyturn_inbattle_params[key].value})
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
                        if (this.everyturn_ailment_params[key].enabled) {
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
                            params.push({Name: key, Value: this.inattack_common_params[key].value});
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
                        if (this.inattack_inbattle_params[key].enabled) {
                            params.push({Name: key, Value: this.inattack_inbattle_params[key].value})
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
                        if (this.inattack_ailment_params[key].enabled) {
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
                            params.push({Name: key, Value: this.inbeattack_common_params[key].value});
                        }
                    }
                }
                if (this.checkUsing(this.inbeattack_common_params)) {
                    this.AddElement(e, "InBeAttack.CurrentParameter", params);
                    this.AddElement(e, "InBeAttack.CurrentParameterTarget", this.inbeattack_common_target);
                }

                params = [];
                for (let key in this.inbeattack_inbattle_params) {
                    if (this.inbeattack_inbattle_params.hasOwnProperty(key)) {
                        if (this.inbeattack_inbattle_params[key].enabled) {
                            params.push({Name: key, Value: this.inbeattack_inbattle_params[key].value})
                        }
                    }
                }

                if (this.checkUsing(this.inbeattack_inbattle_params)) {
                    this.AddElement(e, "InBeAttack.TemporaryParameter", params);
                    this.AddElement(e, "InBeAttack.TemporaryParameterTarget", this.inbeattack_inbattle_target);
                }

                params = [];
                for (let key in this.inbeattack_ailment_params) {
                    if (this.inbeattack_ailment_params.hasOwnProperty(key)) {
                        if (this.inbeattack_ailment_params[key].enabled) {
                            params.push({
                                Name: key,
                                Action: this.inbeattack_ailment_params[key].action,
                                Probability: this.inbeattack_ailment_params[key].probability
                            });
                        }
                    }
                }

                if (this.checkUsing(this.inbeattack_ailment_params)) {
                    this.AddElement(e, "InBeAttack.StatusAilment", params);
                    this.AddElement(e, "InBeAttack.AilmentTarget", this.inbeattack_ailment_target);
                }

                if (this.inbeattack_inbattle_customevent.enabled) {
                    this.AddElement(e, "InBeAttack.CustomEvent", this.inbeattack_inbattle_customevent.value);
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
                    common.CurrentParameter.forEach((data) => {
                        this.normal_common_params[data.Name] = {value: data.Value, enabled: true};
                    });
                }
                if ("CurrentParameterTarget" in common) {
                    this.normal_common_target = common.CurrentParameterTarget;
                }
            }
            if ("InField" in normal) {
                let infield = normal.InField;
                if ("AbsoluteParameter" in infield) {
                    infield.AbsoluteParameter.forEach((data) => {
                        this.normal_infield_params[data.Name] = {value: data.Value, enabled: true};
                    });
                }
                if ("AbsoluteParameterTarget" in infield) {
                    this.normal_infield_target = infield.AbsoluteParameterTarget;
                }
                if ("CustomEvent" in infield) {
                    this.normal_infield_customevent = {value: infield.CustomEvent, enabled: true};
                }
            }
            if ("InBattle" in normal) {
                let inbattle = normal.InBattle;
                if ("TemporaryParameter" in inbattle) {
                    inbattle.TemporaryParameter.forEach((data) => {
                        this.normal_inbattle_params[data.Name] = {value: data.Value, enabled: true};
                    });
                }
                if ("StatusAilment" in inbattle) {
                    let ailment = inbattle.StatusAilment;
                    ailment.forEach((data) => {
                        this.normal_ailment_params[data.Name] = {
                            action: data.Action,
                            probability: data.Probability,
                            enabled: true
                        };
                    });
                }
                if ("Target" in inbattle) {
                    this.normal_inbattle_target = inbattle.Target;
                }
                if ("CustomEvent" in inbattle) {
                    this.normal_inbattle_customevent = {value: inbattle.CustomEvent, enabled: true};
                }
            }
        }

        if ("Equipment" in parsed) {
            this.equipment = true;
            let equipment = parsed.Equipment;
            if ("Category" in equipment) {
                this.equipment_category = equipment.Category;
            }
            if ("TemporaryParameter" in equipment) {
                equipment.TemporaryParameter.forEach((data) => {
                    this.equipment_params[data.Name] = {value: data.Value, enabled: true};
                });
            }
        }

        if ("WalkField" in parsed) {
            this.walk_field = true;
            let walkfield = parsed.WalkField;
            if ("CurrentParameter" in walkfield) {
                walkfield.CurrentParameter.forEach((data) => {
                    this.walkfield_common_params[data.Name] = {value: data.Value, enabled: true};
                });
            }
            if ("CurrentParameterTarget" in walkfield) {
                this.walkfield_common_target = walkfield.CurrentParameterTarget;
            }
            if ("CustomEvent" in walkfield) {
                this.walkfield_customevent = {value: walkfield.CustomEvent, enabled: true};
            }
        }

        if ("EveryTurn" in parsed) {
            this.every_turn = true;
            let every = parsed.EveryTurn;
            if ("CurrentParameter" in every) {
                every.CurrentParameter.forEach((data) => {
                    this.everyturn_common_params[data.Name] = {value: data.Value, enabled: true};
                });
            }
            if ("CurrentParameterTarget" in every) {
                this.everyturn_common_target = every.CurrentParameterTarget;
            }
            if ("TemporaryParameter" in every) {
                every.TemporaryParameter.forEach((data) => {
                    this.everyturn_inbattle_params[data.Name] = {value: data.Value, enabled: true};
                });
            }
            if ("TemporaryParameterTarget" in every) {
                this.everyturn_inbattle_target = every.TemporaryParameterTarget;
            }
            if ("StatusAilment" in every) {
                every.StatusAilment.forEach((data) => {
                    this.everyturn_ailment_params[data.Name] = {
                        action: data.Action,
                        probability: data.Probability,
                        enabled: true
                    };
                });
            }
            if ("AilmentTarget" in every) {
                this.everyturn_ailment_target = every.AilmentTarget;
            }
            if ("CustomEvent" in every) {
                this.everyturn_customevent = {value: every.CustomEvent, enabled: true};
            }
        }

        if ("InAttack" in parsed) {
            this.in_attack = true;
            let every = parsed.InAttack;
            if ("CurrentParameter" in every) {
                every.CurrentParameter.forEach((data) => {
                    this.inattack_common_params[data.Name] = {value: data.Value, enabled: true};
                });
            }
            if ("CurrentParameterTarget" in every) {
                this.inattack_common_target = every.CurrentParameterTarget;
            }
            if ("TemporaryParameter" in every) {
                every.TemporaryParameter.forEach((data) => {
                    this.inattack_inbattle_params[data.Name] = {value: data.Value, enabled: true};
                });
            }
            if ("TemporaryParameterTarget" in every) {
                this.inattack_inbattle_target = every.TemporaryParameterTarget;
            }
            if ("StatusAilment" in every) {
                every.StatusAilment.forEach((data) => {
                    this.inattack_ailment_params[data.Name] = {
                        action: data.Action,
                        probability: data.Probability,
                        enabled: true
                    };
                });
            }
            if ("AilmentTarget" in every) {
                this.inattack_inbattle_ailment_target = every.AilmentTarget;
            }
            if ("CustomEvent" in every) {
                this.inattack_inbattle_customevent = {value: every.CustomEvent, enabled: true};
            }
        }

        if ("InBeAttack" in parsed) {
            this.in_be_attacked = true;
            let every = parsed.InBeAttack;
            if ("CurrentParameter" in every) {
                every.CurrentParameter.forEach((data) => {
                    this.inbeattack_common_params[data.Name] = {value: data.Value, enabled: true};
                });
            }
            if ("CurrentParameterTarget" in every) {
                this.inbeattack_common_target = every.CurrentParameterTarget;
            }
            if ("TemporaryParameter" in every) {
                every.TemporaryParameter.forEach((data) => {
                    this.inbeattack_inbattle_params[data.Name] = {value: data.Value, enabled: true};
                });
            }
            if ("TemporaryParameterTarget" in every) {
                this.inbeattack_inbattle_target = every.TemporaryParameterTarget;
            }
            if ("StatusAilment" in every) {
                every.StatusAilment.forEach((data) => {
                    this.inbeattack_ailment_params[data.Name] = {
                        action: data.Action,
                        probability: data.Probability,
                        enabled: true
                    };
                });
            }
            if ("AilmentTarget" in every) {
                this.inbeattack_ailment_target = every.AilmentTarget;
            }
            if ("CustomEvent" in every) {
                this.inbeattack_inbattle_customevent = {value: every.CustomEvent, enabled: true};
            }
        }
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
}

new Vue({
    el: "#app",
    data: {
        mode: "list",
        items: [],
        display_items: [],
        item: null,
        export_dialog: false,
        csv_data: "",
        card_height: 0,
        card_height_backup: 0,
        scroll_top: 0,
        scroll_top_backup: 0,
        start_index: 0,

        item_attribute: ['None', 'Void', 'Earth', 'Water', 'Lightning', 'Wind', 'Ice', 'Flame'],
        item_categories: ['Weapon', 'Armor', 'Food', 'UseItem', 'Valuables', 'Other'],
        infield_targets: ['Person', 'Party'],
        inbattle_targets: ['Person', 'Around', 'Party'],
        inbattle_ailment_types: ['Give', 'Clear'],
        probabilities: ['Absolutely', 'Probably', 'Maybe', 'Possibly'],
        equipment_categories: ['Head', 'Body', 'Shield', 'Accessory'],
    },
    mounted: function () {
        window.addEventListener('resize', this.handleResize);
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
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].id !== i) {
                    new_item.id = i;
                    found = true;
                    break;
                }
            }
            if (!found) {
                new_item.id = this.items.length;
            }
            this.items.push(new_item);
            this.items.sort(this.itemCompare);
            this.recomputeDisplayCards();
        }
        ,
        removeItem: function (item_id) {
            this.items = this.items.filter((item) => {
                return item.id !== item_id
            });
            this.recomputeDisplayCards();
        },
        toEditItem: function (item) {
            this.scroll_top_backup = this.scroll_top;
            this.card_height_backup = this.card_height;
            this.mode = "edit";
            this.item = item;
        },
        toList: function () {
            this.mode = "list";
            this.list = document.getElementById('item-list');
            this.start_index = parseInt(this.scroll_top_backup / this.card_height_backup, 10);
            this.display_items = this.items.slice(this.start_index, this.start_index + this.calcElementNum());
            this.scroll_top = this.scroll_top_backup;
            Vue.nextTick(() => {
                scrollTo(0, this.scroll_top_backup);
            });
        },
        generateCSV: function () {
            let rows = [];
            this.items.forEach((item) => rows.push(item.GenerateRow()));
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
            data.forEach((row) => {
                let item = new Item();
                item.id = parseInt(row.Name);
                item.name = row.itemName;
                item.category = row.category;
                item.description = row.description;
                item.attribute = row.attribute;
                item.can_use_in_field = row.canUseInField;
                item.can_use_in_battle = row.canUseInBattle;
                item.is_equipment = row.isEquipment;
                item.can_selling = row.canSell;
                item.buying_price = parseInt(row.buyingPrice);
                item.selling_price = parseInt(row.sellingPrice);
                item.LoadJson(row.effects);
                this.items.push(item);
            });
            this.items.sort(this.itemCompare);
            this.recomputeDisplayCards();
        },
        handleResize: function () {
            this.recomputeDisplayCards();
        },
        recomputeDisplayCards: function () {
            this.card_height = this.getElementHeight();
            this.display_items = this.items.slice(this.start_index, this.start_index + this.calcElementNum());
        },
        getElementHeight: function () {
            let element = document.getElementById('element');
            if (element === undefined) {
                return 1;
            } else {
                    return element.clientHeight;
            }
        },
        calcElementNum: function () {
            return Math.ceil((window.innerHeight - 64) / this.card_height) + 2;
        },
        updateScrollParam: function (e) {
            this.scroll_top = e.target.scrollingElement.scrollTop;
            this.start_index = parseInt(this.scroll_top / this.card_height, 10);
            this.display_items = this.items.slice(this.start_index, this.start_index + this.calcElementNum());
        }
    },
    computed: {
        listStyle: function () {
            let top_offset = this.scroll_top;
            if (this.scroll_top > this.card_height) {
                top_offset -= this.card_height;
            }
            top_offset -= (this.scroll_top % this.card_height);
            return {
                "overflow": "auto",
                "height": "100%",
                "padding-top": top_offset + 'px',
                'padding-bottom': (this.card_height * (this.items.length - this.calcElementNum())) - top_offset + 'px'
            }
        }
    }
});

