<template>
    <div>
        <div class="loadingSplash" v-if="!doneLoading">
            <loading-box>Palun oodake...</loading-box>
        </div>
        <div v-if="doneLoading">
            <h1 class="text-center mb-4">Valimise statistika</h1>
            <div class="d-lg-none">
                <div class="card">
                    <div class="card-body">
                        <form>
                            <div class="row">
                                <div class="col-4 debug3"><h5 class="card-title">Sorteeri:</h5></div>
                                <div class="col-4 debug2 px-0">
                                    <div class="form-group">
                                        <select class="form-control" id="sort-age-mobile">
                                            <option value="1">Vanus: kasvavalt</option>
                                            <option value="2">Vanus: kahanevalt</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-4 debug1 px-0">
                                    <div class="form-group">
                                        <select class="form-control" id="sort-gender-mobile">
                                            <option value="1">Sugu: kasvavalt</option>
                                            <option value="2">Sugu: kahanevalt</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 debug4">
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="filter-students-mobile">
                                        <label class="form-check-label" for="filter-students-mobile">Tudengid</label>
                                    </div>
                                </div>
                                <div class="col-4 debug5">
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="filter-professors-mobile">
                                        <label class="form-check-label" for="filter-professors-mobile">Õppejõud</label>
                                    </div>
                                </div>
                                <div class="col-4 debug2 px-0">
                                    <div class="form-group">
                                        <select class="form-control" id="show-items-mobile">
                                            <option value="5">Kuva 5</option>
                                            <option value="10">Kuva 10</option>
                                            <option value="15">Kuva 15</option>
                                            <option value="20">Kuva 20</option>
                                            <option value="25">Kuva 25</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <!-- First column -->
                <div class="col-sm-3 debug2 d-none d-lg-block">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Sorteeri:</h5>
                            <form>
                                <div class="form-group">
                                    <select class="form-control" id="sort-age">
                                        <option value="1">Vanus: kasvavalt</option>
                                        <option value="2">Vanus: kahanevalt</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select class="form-control" id="sort-gender">
                                        <option value="1">Sugu: kasvavalt</option>
                                        <option value="2">Sugu: kahanevalt</option>
                                    </select>
                                </div>
                            </form>
                            <h5 class="card-title mt-5">Filtreeri:</h5>
                            <form>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="filter-students">
                                    <label class="form-check-label" for="filter-students">Tudengid</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="filter-professors">
                                    <label class="form-check-label" for="filter-professors">Õppejõud</label>
                                </div>
                            </form>
                            <div class="row mt-5">
                                <div class="col-sm-6"><h5 class="card-title">Kuva:</h5></div>
                                <div class="col-sm-6">
                                    <input type="number" value="5" class="form-control" id="show-items">
                                    <label class="form-check-label" for="show-items"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Second column -->
                <div class="col-sm-9 col-lg-6 debug3">
                    <h2 class="mb-5 debug5">Leitud: {{ json.all }} hääletusi (leht 1)</h2>
                    <statcard color="red" seconds="20" age="22" gender="mees" status="tudeng" choice="TTÜ"></statcard>
                    <statcard color="green" seconds="20" age="22" gender="mees" status="tudeng" choice="TTÜ"></statcard>
                    <statcard color="yellow" seconds="20" age="22" gender="mees" status="tudeng" choice="TTÜ"></statcard>
                    <statcard color="yellow" seconds="20" age="22" gender="mees" status="tudeng" choice="TTÜ"></statcard>
                    <statcard color="red" seconds="20" age="22" gender="mees" status="tudeng" choice="TTÜ"></statcard>
                </div>
                <!-- Third column -->
                <div class="col-sm-3 debug4">
                    <h2 class="text-center mb-5 debug5">Kokku:</h2>
                    <statbar name="TalTech'i" v-if="renderStatbar" :amount="json.total.taltech[0]"
                             :barpercent="json.total.taltech[1]" :textpercent="json.total.taltech[2]"></statbar>
                    <statbar name="TTÜ" v-if="renderStatbar" :amount="json.total.ttu[0]"
                             :barpercent="json.total.ttu[1]" :textpercent="json.total.ttu[2]"></statbar>
                </div>
            </div>
            <div class="d-none d-sm-block text-center">
                <div class="row">
                    <div class="col-sm-2 debug6"></div>
                    <div class="col-sm-4 mb-2 debug5">
                        <button type="button" class="btn btn-primary btn-lg float-right">&lt;&lt; Tagasi</button>
                    </div>
                    <div class="col-sm-4 mb-2 debug4">
                        <button type="button" class="btn btn-primary btn-lg float-left">Edasi &gt;&gt;</button>
                    </div>
                    <div class="col-sm-2 debug3"></div>
                </div>
            </div>
            <div class="d-block d-sm-none">
                <div class="row">
                    <div class="col-6 mb-2 debug5">
                        <button type="button" class="btn btn-primary btn-lg float-right">&lt;&lt; Tagasi</button>
                    </div>
                    <div class="col-6 mb-2 debug4">
                        <button type="button" class="btn btn-primary btn-lg float-left">Edasi &gt;&gt;</button>
                    </div>
                </div>
            </div>
            <hr>
            <div id="charts">
                <h2>Jaotus (kokku):</h2>
                <div class="row">
                    <div class="col-sm-6 pt-3">
                        <big-statcard type="pie" name="Vanuse järgi" :value="json.pieAge"></big-statcard>
                    </div>
                    <div class="col-sm-6 pt-3">
                        <big-statcard type="pie" name="Soo järgi" :value="json.pieGender"></big-statcard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LoadingBox from "../LoadingBox.vue";
    import StatCard from "../StatCard.vue";
    import StatBar from "../StatBar.vue";
    import BigStatCard from "../BigStatCard.vue";

    export default {
        name: "stat",
        components: {
            "loading-box": LoadingBox,
            "statcard": StatCard,
            "statbar": StatBar,
            "big-statcard": BigStatCard
        },
        data: function() {
            return {
                renderStatbar: false,
                json: {},
                doneLoading: false
            }
        },
        beforeCreate: function() {
            fetch("json/stat.json")
                .then(function(response) {
                    return response.json();
                })
                .then(function(json) {
                    this.json = json;
                    this.renderStatbar = true;
                    setTimeout(function() {
                        this.doneLoading = true;
                    }.bind(this), 5000);
                }.bind(this));
        }
    }
</script>
