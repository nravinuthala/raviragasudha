/**
 * SWARA FINGER CHART DATABASE
         * Hole state definition:
         * 1 = Fully Closed (Filled circle)
         * 0.5 = Half Opened / Half Closed (Half filled)
         * 0 = Fully Opened (Empty circle)
         * Array length = 8 (holes 1 to 8)
         */
        const SUPABASE_URL = 'https://ogywmetyfckntdszukqv.supabase.co';
        const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJIUzI1NiIsInJlZiI6Im9neXdtZXR5ZmNrbnRkc3p1a3YyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1MDUyODUsImV4cCI6MjEwODA4MTI4NX0.L1Dx9UnDl5URHqU5wFryMcNdKbL55o3_VoUJ14RJIOo';
        const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_PLtW5wkQvQyMKjs8hffMMA_EgmF4wYB';
        const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) || null;

        const SWARA_DATA = {
            'S': {
                name: 'Shadjama (S)',
                holes: [1, 1, 0, 0, 0, 0, 1, 0],
                pitchRatio: 1.0, // Base frequency multiplier
                westernName: 'Sa',
                aliases: ['S']
            },
            'R1': {
                name: 'Shuddha Rishabha (R1)',
                holes: [1, 0.5, 0, 0, 0, 0, 1, 0],
                pitchRatio: 16/15,
                westernName: 'Ri1',
                aliases: ['R1']
            },
            'R2': {
                name: 'Chatushruti Rishabha (R2)',
                holes: [1, 0, 0, 0, 0, 0, 1, 0],
                pitchRatio: 9/8,
                westernName: 'Ri2 / Ga1',
                aliases: ['R2', 'G1']
            },
            'G1': {
                name: 'Shuddha Gandhara (G1)',
                holes: [0.5, 0, 0, 0, 0, 0, 1, 0],
                pitchRatio: 9/8,
                westernName: 'Ga1 (Same as R2)',
                aliases: ['G1']
            },
            'G2': {
                name: 'Sadharana Gandhara (G2)',
                holes: [0, 0, 0, 0, 0, 0, 1, 0],
                pitchRatio: 6/5,
                westernName: 'Ga2 / Ri3',
                aliases: ['G2', 'R3']
            },
            'G3': {
                name: 'Antara Gandhara (G3)',
                holes: [0, 0, 0, 0, 0, 0, 1, 0],
                pitchRatio: 5/4,
                westernName: 'Ga3',
                aliases: ['G3']
            },
            'M1': {
                name: 'Shuddha Madhyama (M1)',
                holes: [0, 1, 1, 1, 1, 1, 1, 0],
                pitchRatio: 4/3,
                westernName: 'Ma1',
                aliases: ['M1']
            },
            'M2': {
                name: 'Prati Madhyama (M2)',
                holes: [1, 1, 1, 1, 1, 0.5, 0, 0],
                pitchRatio: 45/32,
                westernName: 'Ma2',
                aliases: ['M2']
            },
            'P': {
                name: 'Panchama (P)',
                holes: [1, 1, 1, 1, 1, 0, 0, 0],
                pitchRatio: 3/2,
                westernName: 'Pa',
                aliases: ['P']
            },
            'D1': {
                name: 'Shuddha Dhaivata (D1)',
                holes: [1, 1, 1, 1, 0.5, 0, 1, 0],
                pitchRatio: 8/5,
                westernName: 'Dha1',
                aliases: ['D1']
            },
            'D2': {
                name: 'Chatushruti Dhaivata (D2)',
                holes: [1, 1, 1, 1, 0, 0, 1, 0],
                pitchRatio: 5/3,
                westernName: 'Dha2 / Ni1',
                aliases: ['D2', 'N1']
            },
            'N1': {
                name: 'Shuddha Nishada (N1)',
                holes: [1, 1, 1, 0, 0, 0, 1, 0],
                pitchRatio: 5/3,
                westernName: 'Ni1',
                aliases: ['N1']
            },
            'N2': {
                name: 'Kaisiki Nishada (N2)',
                holes: [1, 1, 0.5, 0, 0, 0, 1, 0],
                pitchRatio: 16/9,
                westernName: 'Ni2 / Dha3',
                aliases: ['N2', 'D3']
            },
            'N3': {
                name: 'Kakali Nishada (N3)',
                holes: [1, 1, 0, 0, 0, 0, 1, 0],
                pitchRatio: 15/8,
                westernName: 'Ni3',
                aliases: ['N3']
            },
            "S'": {
                name: "Tara Sthayi Shadjama (S')",
                holes: [1, 1, 0, 0, 0, 0, 1, 0],
                pitchRatio: 2.0,
                westernName: "Higher S",
                aliases: ["S'"]
            }
        };

        // DEFAULT DATA
        const DEFAULT_ALANKARS = [
            {
                id: 'ala_1',
                name: 'Mayamalavagowla - Sarali Varisai 1',
                type: 'Sarali Varisai',
                description: 'Basic ascending and descending exercise in Mayamalavagowla',
                sequence: ['S', 'R1', 'G3', 'M1', 'P', 'D1', 'N3', 'S\'', 'S\'', 'N3', 'D1', 'P', 'M1', 'G3', 'R1', 'S']
            },
            {
                id: 'ala_2',
                name: 'Sarali Varisai 2 (4 Notes repeated)',
                type: 'Sarali Varisai',
                description: 'Focusing on four-note phrase repetitions',
                sequence: ['S', 'R1', 'G3', 'M1', 'S', 'R1', 'G3', 'M1', 'S', 'R1', 'G3', 'M1', 'P', 'D1', 'N3', 'S\'']
            },
            {
                id: 'ala_3',
                name: 'Janta Varisai 1',
                type: 'Janta Varisai',
                description: 'Doubling each note for finger stress & articulation',
                sequence: ['S', 'S', 'R1', 'R1', 'G3', 'G3', 'M1', 'M1', 'P', 'P', 'D1', 'D1', 'N3', 'N3', 'S\'', 'S\'']
            }
        ];

        const DEFAULT_RAAGAS = [
            {
                id: 'raa_1',
                name: 'Mayamalavagowla',
                info: '15th Melakarta Raaga',
                aarohana: ['S', 'R1', 'G3', 'M1', 'P', 'D1', 'N3', 'S\''],
                avarohana: ['S\'', 'N3', 'D1', 'P', 'M1', 'G3', 'R1', 'S'],
                description: 'Fundamental raaga used for initial Carnatic lessons. Symmetrical scale with distinct half-steps.'
            },
            {
                id: 'raa_2',
                name: 'Sankarabharanam',
                info: '29th Melakarta Raaga',
                aarohana: ['S', 'R2', 'G3', 'M1', 'P', 'D2', 'N3', 'S\''],
                avarohana: ['S\'', 'N3', 'D2', 'P', 'M1', 'G3', 'R2', 'S'],
                description: 'Equivalent to the Western Major scale. Majestic, joyful, and restful in character.'
            },
            {
                id: 'raa_3',
                name: 'Kalyani',
                info: '65th Melakarta Raaga',
                aarohana: ['S', 'R2', 'G3', 'M2', 'P', 'D2', 'N3', 'S\''],
                avarohana: ['S\'', 'N3', 'D2', 'P', 'M2', 'G3', 'R2', 'S'],
                description: 'Prati Madhyama equivalent of Shankarabharanam. Highly expressive and auspicious.'
            },
            {
                id: 'raa_4',
                name: 'Mohanam',
                info: 'Janya Raaga (Pentatonic)',
                aarohana: ['S', 'R2', 'G3', 'P', 'D2', 'S\''],
                avarohana: ['S\'', 'D2', 'P', 'G3', 'R2', 'S'],
                description: 'Audava-Audava (5 notes ascending and descending). Sweet and universal appeal.'
            }
        ];

        // SAVED DATA VALIDATION
        const ALANKAR_TYPES = ['Sarali Varisai', 'Janta Varisai', 'Dhatu Varisai', 'Alankar', 'Custom'];
        const SWARA_KEYS = new Set(Object.keys(SWARA_DATA));

        function isPlainObject(value) {
            return value !== null && typeof value === 'object' && !Array.isArray(value);
        }

        function isValidText(value, maxLength, required = false) {
            return typeof value === 'string' &&
                value.length <= maxLength &&
                (!required || value.trim().length > 0);
        }

        function isValidSwaraSequence(sequence) {
            return normalizeSwaraSequence(sequence) !== null;
        }

        function normalizeSwaraEntry(entry) {
            let note;
            let beats = 1;

            if (typeof entry === 'string') {
                const annotated = /^([^,]+),(\d+)$/.exec(entry.trim());
                note = annotated ? annotated[1].trim() : entry.trim();
                if (annotated) beats = Number(annotated[2]);
            } else if (isPlainObject(entry)) {
                note = entry.note;
                beats = entry.beats === undefined ? 1 : entry.beats;
            } else {
                return null;
            }

            if (typeof note !== 'string' || !SWARA_KEYS.has(note) ||
                typeof beats !== 'number' || !Number.isInteger(beats) ||
                beats <= 0 || beats > 64) {
                return null;
            }
            return { note, beats };
        }

        function normalizeSwaraSequence(sequence) {
            if (!Array.isArray(sequence) || sequence.length === 0 || sequence.length > 256) return null;
            const normalized = sequence.map(normalizeSwaraEntry);
            return normalized.every(Boolean) ? normalized : null;
        }

        function formatSwaraEntry(entry) {
            const normalized = normalizeSwaraEntry(entry);
            return normalized
                ? `${normalized.note}${normalized.beats === 1 ? '' : `,${normalized.beats}`}`
                : '';
        }

        function formatSwaraSequence(sequence) {
            return normalizeSwaraSequence(sequence)?.map(formatSwaraEntry).join(' ') || '';
        }

        function isValidId(value) {
            return isValidText(value, 80, true);
        }

        function isValidAlankarCollection(value) {
            return Array.isArray(value) &&
                value.every(item => isPlainObject(item) &&
                    isValidId(item.id) &&
                    isValidText(item.name, 120, true) &&
                    ALANKAR_TYPES.includes(item.type) &&
                    isValidText(item.description, 500) &&
                    isValidSwaraSequence(item.sequence));
        }

        function isValidRaagaCollection(value) {
            return Array.isArray(value) &&
                value.every(item => isPlainObject(item) &&
                    isValidId(item.id) &&
                    isValidText(item.name, 120, true) &&
                    isValidText(item.info, 200) &&
                    isValidText(item.description, 500) &&
                    isValidSwaraSequence(item.aarohana) &&
                    isValidSwaraSequence(item.avarohana));
        }

        function previousDefaultSwaras(sequence) {
            return sequence.map(note => note === 'G3' ? 'G2' : note === 'N3' ? 'N2' : note);
        }

        function restoreOriginalDefaultSequences(collection, defaults, label) {
            return collection.map(item => {
                const original = defaults.find(entry => entry.id === item.id && entry.name === item.name);
                if (!original) return item;

                if (label === 'exercise' &&
                    JSON.stringify(item.sequence) === JSON.stringify(previousDefaultSwaras(original.sequence))) {
                    return { ...item, sequence: original.sequence };
                }
                if (label === 'raaga' &&
                    JSON.stringify(item.aarohana) === JSON.stringify(previousDefaultSwaras(original.aarohana)) &&
                    JSON.stringify(item.avarohana) === JSON.stringify(previousDefaultSwaras(original.avarohana))) {
                    return { ...item, aarohana: original.aarohana, avarohana: original.avarohana };
                }
                return item;
            });
        }

        function showAppMessage(message) {
            let notice = document.getElementById('app-message');
            if (!notice) {
                notice = document.createElement('div');
                notice.id = 'app-message';
                notice.setAttribute('role', 'alert');
                notice.className = 'mx-auto mt-4 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-amber-200';
                document.querySelector('main').before(notice);
            }
            notice.appendChild(makeElement('p', '', message));
        }

        function loadCollection(key, defaults, validator, label) {
            try {
                const stored = localStorage.getItem(key);
                if (stored === null) return defaults;
                const parsed = JSON.parse(stored);
                if (validator(parsed)) {
                    const restored = restoreOriginalDefaultSequences(parsed, defaults, label);
                    if (JSON.stringify(restored) !== JSON.stringify(parsed)) {
                        try {
                            localStorage.setItem(key, JSON.stringify(restored));
                        } catch (error) {
                            showAppMessage(`Original swaras for built-in ${label}s were restored for this session but could not be saved. Check browser storage settings.`);
                            console.error(`Unable to save restored default ${label} data to localStorage key "${key}".`, error);
                        }
                    }
                    return restored;
                }
                showAppMessage(`Saved ${label} data is invalid. Default ${label} data is shown; saving changes will replace it.`);
                console.error(`Invalid ${label} data in localStorage key "${key}".`);
            } catch (error) {
                showAppMessage(`Saved ${label} data could not be loaded. Default ${label} data is shown; saving changes will replace it.`);
                console.error(`Unable to load ${label} from localStorage key "${key}".`, error);
            }
            return defaults;
        }

        function persistCollection(key, collection, label) {
            try {
                localStorage.setItem(key, JSON.stringify(collection));
                return true;
            } catch (error) {
                showAppMessage(`Could not save ${label}. Your changes have not been applied. Check browser storage settings and try again.`);
                console.error(`Unable to save ${label} to localStorage key "${key}".`, error);
                return false;
            }
        }

        function mapSupabaseAlankar(row) {
            if (!isPlainObject(row) || row.id === null || row.id === undefined) return null;
            const sequence = typeof row.swara_sequence === 'string'
                ? normalizeSwaraSequence(row.swara_sequence.trim().split(/\s+/))
                : null;
            const item = {
                id: `sb-alankar-${row.id}`,
                databaseId: row.id,
                name: row.name,
                type: row.exercise_type,
                description: row.description || '',
                sequence
            };
            return isValidId(item.id) &&
                isValidText(item.name, 120, true) &&
                isValidText(item.type, 120, true) &&
                isValidText(item.description, 500) &&
                sequence
                ? item
                : null;
        }

        function mapSupabaseRaaga(row) {
            if (!isPlainObject(row) || row.id === null || row.id === undefined) return null;
            const aarohana = typeof row.arohana === 'string'
                ? normalizeSwaraSequence(row.arohana.trim().split(/\s+/))
                : null;
            const avarohana = typeof row.avarohana === 'string'
                ? normalizeSwaraSequence(row.avarohana.trim().split(/\s+/))
                : null;
            const item = {
                id: `sb-raaga-${row.id}`,
                databaseId: row.id,
                name: row.name,
                info: row.scale_info || '',
                aarohana,
                avarohana,
                description: row.description || ''
            };
            return isValidId(item.id) &&
                isValidText(item.name, 120, true) &&
                isValidText(item.info, 200) &&
                isValidText(item.description, 500) &&
                aarohana &&
                avarohana
                ? item
                : null;
        }

        function mergeSupabaseItems(localItems, remoteItems) {
            const merged = new Map(
                localItems
                    .filter(item => item.databaseId === undefined)
                    .map(item => [item.id, item])
            );
            remoteItems.forEach(item => merged.set(item.id, item));
            return [...merged.values()];
        }

        async function fetchDataFromSupabase() {
            if (!supabaseClient) {
                showAppMessage('Supabase could not be initialized. Check that the Supabase library loaded correctly.');
                console.error('Supabase is unavailable; using locally saved collections.');
                return false;
            }

            try {
                const [raagasResult, alankarsResult] = await Promise.all([
                    supabaseClient.from('carnatic_ragas').select('id,name,scale_info,arohana,avarohana,description'),
                    supabaseClient.from('carnatic_alankars').select('id,name,exercise_type,description,swara_sequence')
                ]);
                if (raagasResult.error) throw raagasResult.error;
                if (alankarsResult.error) throw alankarsResult.error;

                const remoteRaagas = raagasResult.data.map(mapSupabaseRaaga).filter(Boolean);
                const remoteAlankars = alankarsResult.data.map(mapSupabaseAlankar).filter(Boolean);
                if (remoteRaagas.length !== raagasResult.data.length ||
                    remoteAlankars.length !== alankarsResult.data.length) {
                    console.warn('Some Supabase records were skipped because their fields or swara sequences were invalid.');
                }

                raagas = mergeSupabaseItems(raagas, remoteRaagas);
                alankars = mergeSupabaseItems(alankars, remoteAlankars);
                persistCollection('carnatic_raagas', raagas, 'raaga');
                persistCollection('carnatic_alankars', alankars, 'exercise');
                renderRaagas();
                renderAlankars();
                return true;
            } catch (error) {
                console.error('Unable to load raagas and alankars from Supabase.', error);
                showAppMessage('Could not load raagas and alankars from Supabase. Locally saved items are still available.');
                return false;
            }
        }

        function parseSwaraSequence(rawValue, input) {
            const tokens = rawValue.trim().split(/\s+/);
            const sequence = rawValue.trim() ? normalizeSwaraSequence(tokens) : null;
            const errorMessage = !rawValue.trim()
                ? 'Enter at least one swara.'
                : tokens.length > 256
                    ? 'A sequence can contain at most 256 swaras.'
                    : !sequence
                        ? 'Use valid swaras with optional beat counts, for example S,2 or R1.'
                        : '';
            input.setCustomValidity(errorMessage);
            if (errorMessage) {
                input.reportValidity();
                return null;
            }
            return sequence;
        }

        // APP STATE
        let alankars = loadCollection('carnatic_alankars', DEFAULT_ALANKARS, isValidAlankarCollection, 'exercise');
        let raagas = loadCollection('carnatic_raagas', DEFAULT_RAAGAS, isValidRaagaCollection, 'raaga');
        
        let currentSwara = 'S';
        let currentSequence = DEFAULT_ALANKARS[0].sequence;
        let activeNoteIndex = 0;
        let isPlaying = false;
        let playbackTimeout = null;
        let bpm = 80;
        let basePitch = 329.63; // Standard E4 Flute

        // WEB AUDIO SYNTHESIZER
        let audioCtx = null;
        let metronomeBpm = 120;
        let metronomeBeatsPerMeasure = 4;
        let metronomeBeatIndex = 0;
        let metronomeIsRunning = false;
        let metronomeScheduler = null;
        let metronomeNextBeatTime = 0;
        const metronomeScheduledVisuals = new Set();
        const metronomeActiveOscillators = new Set();
        const METRONOME_SCHEDULE_AHEAD = 0.12;
        const METRONOME_SCHEDULER_INTERVAL = 25;

        function getAudioContext() {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            return audioCtx;
        }

        function setMetronomeTempo(value) {
            if (value === '' || !Number.isFinite(Number(value))) return;
            metronomeBpm = Math.max(20, Math.min(300, Math.round(Number(value))));
            document.getElementById('metronome-bpm-input').value = metronomeBpm;
            document.getElementById('metronome-bpm-slider').value = metronomeBpm;
        }

        function adjustMetronomeTempo({ delta, factor }) {
            const current = metronomeBpm;
            if (factor !== undefined) {
                setMetronomeTempo(current * Number(factor));
            } else {
                setMetronomeTempo(current + Number(delta));
            }
        }

        function adjustPracticeTempo({ delta, factor }) {
            const nextBpm = factor !== undefined
                ? (Number(factor) === 0.5 ? Math.floor(bpm / 2) : Math.round(bpm * Number(factor)))
                : bpm + Number(delta);
            updateBPM(Math.max(20, Math.min(300, nextBpm)));
        }

        function renderMetronomeBeatIndicators() {
            const container = document.getElementById('metronome-beat-indicators');
            if (!container) return;
            container.replaceChildren();

            for (let index = 0; index < metronomeBeatsPerMeasure; index++) {
                const indicator = makeElement(
                    'span',
                    'metronome-beat w-9 h-9 rounded-full bg-stone-800 border border-stone-600 flex items-center justify-center text-xs font-bold text-stone-400',
                    String(index + 1)
                );
                indicator.dataset.beat = index;
                indicator.setAttribute('aria-label', `Beat ${index + 1}${index === 0 ? ', downbeat' : ''}`);
                container.appendChild(indicator);
            }
        }

        async function toggleMetronome() {
            if (metronomeIsRunning) {
                stopMetronome();
                return;
            }

            const button = document.getElementById('metronome-toggle');
            button.disabled = true;
            try {
                const ctx = getAudioContext();
                if (ctx.state === 'suspended') await ctx.resume();
                if (ctx.state !== 'running') {
                    throw new Error(`AudioContext is ${ctx.state}; expected running.`);
                }

                metronomeIsRunning = true;
                metronomeBeatIndex = 0;
                metronomeNextBeatTime = ctx.currentTime + 0.05;
                updateMetronomeControls();
                scheduleMetronomeBeats();
                metronomeScheduler = setInterval(scheduleMetronomeBeats, METRONOME_SCHEDULER_INTERVAL);
            } catch (error) {
                stopMetronome();
                console.error('Unable to start metronome audio.', error);
                showAppMessage('Metronome audio could not start. Check browser audio permissions and try again.');
            } finally {
                button.disabled = false;
            }
        }

        function scheduleMetronomeBeats() {
            if (!metronomeIsRunning || !audioCtx) return;
            const scheduleUntil = audioCtx.currentTime + METRONOME_SCHEDULE_AHEAD;

            while (metronomeNextBeatTime < scheduleUntil) {
                const beatIndex = metronomeBeatIndex;
                scheduleMetronomeClick(metronomeNextBeatTime, beatIndex === 0);
                scheduleMetronomeVisual(metronomeNextBeatTime, beatIndex);
                metronomeBeatIndex = (metronomeBeatIndex + 1) % metronomeBeatsPerMeasure;
                metronomeNextBeatTime += 60 / metronomeBpm;
            }
        }

        function scheduleMetronomeClick(when, isDownbeat) {
            const oscillator = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            const frequency = isDownbeat ? 1320 : 880;
            const volume = isDownbeat ? 0.28 : 0.18;

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(frequency, when);
            gain.gain.setValueAtTime(0.0001, when);
            gain.gain.exponentialRampToValueAtTime(volume, when + 0.003);
            gain.gain.exponentialRampToValueAtTime(0.0001, when + 0.055);
            oscillator.connect(gain);
            gain.connect(audioCtx.destination);

            metronomeActiveOscillators.add(oscillator);
            oscillator.addEventListener('ended', () => {
                metronomeActiveOscillators.delete(oscillator);
                oscillator.disconnect();
                gain.disconnect();
            }, { once: true });
            oscillator.start(when);
            oscillator.stop(when + 0.06);
        }

        function scheduleMetronomeVisual(when, beatIndex) {
            const delay = Math.max(0, (when - audioCtx.currentTime) * 1000);
            const timer = setTimeout(() => {
                metronomeScheduledVisuals.delete(timer);
                if (metronomeIsRunning) flashMetronomeBeat(beatIndex);
            }, delay);
            metronomeScheduledVisuals.add(timer);
        }

        function flashMetronomeBeat(beatIndex) {
            document.querySelectorAll('.metronome-beat').forEach(indicator => {
                indicator.classList.remove('metronome-beat-active', 'metronome-beat-accent');
            });
            const indicator = document.querySelector(`.metronome-beat[data-beat="${beatIndex}"]`);
            if (indicator) {
                indicator.classList.add(beatIndex === 0 ? 'metronome-beat-accent' : 'metronome-beat-active');
            }
            document.getElementById('metronome-beat-status').textContent =
                beatIndex === 0 ? 'Beat 1 · Downbeat' : `Beat ${beatIndex + 1}`;
        }

        function updateMetronomeControls() {
            const button = document.getElementById('metronome-toggle');
            button.setAttribute('aria-pressed', String(metronomeIsRunning));
            document.getElementById('metronome-toggle-text').textContent =
                metronomeIsRunning ? 'Stop Metronome' : 'Start Metronome';
            document.getElementById('metronome-toggle-icon').className =
                metronomeIsRunning ? 'fa-solid fa-stop' : 'fa-solid fa-play';
            button.classList.toggle('metronome-running', metronomeIsRunning);
            if (!metronomeIsRunning) {
                document.getElementById('metronome-beat-status').textContent = 'Metronome stopped';
            }
        }

        function stopMetronome() {
            metronomeIsRunning = false;
            if (metronomeScheduler !== null) clearInterval(metronomeScheduler);
            metronomeScheduler = null;
            metronomeScheduledVisuals.forEach(timer => clearTimeout(timer));
            metronomeScheduledVisuals.clear();
            metronomeActiveOscillators.forEach(oscillator => {
                try {
                    oscillator.stop();
                } catch (error) {
                    console.error('Unable to stop a scheduled metronome click.', error);
                }
            });
            metronomeActiveOscillators.clear();
            document.querySelectorAll('.metronome-beat').forEach(indicator => {
                indicator.classList.remove('metronome-beat-active', 'metronome-beat-accent');
            });
            updateMetronomeControls();
        }

        function playFluteTone(frequency, duration = 0.6) {
            try {
                const ctx = getAudioContext();
                const now = ctx.currentTime;
                const noteDuration = Math.max(0.08, duration);
                const attack = 0.08;
                const release = Math.min(0.12, noteDuration * 0.25);
                const releaseStart = Math.max(attack, noteDuration - release);
                const master = ctx.createGain();
                const fundamental = ctx.createOscillator();
                const harmonic = ctx.createOscillator();
                const fundamentalGain = ctx.createGain();
                const harmonicGain = ctx.createGain();
                const vibrato = ctx.createOscillator();
                const vibratoDepth = ctx.createGain();

                master.gain.setValueAtTime(0, now);
                master.gain.linearRampToValueAtTime(0.28, now + attack);
                master.gain.setValueAtTime(0.28, now + releaseStart);
                master.gain.exponentialRampToValueAtTime(0.001, now + noteDuration);

                fundamental.type = 'sine';
                fundamental.frequency.setValueAtTime(frequency, now);
                vibrato.type = 'sine';
                vibrato.frequency.setValueAtTime(5, now);
                vibratoDepth.gain.setValueAtTime(2.5, now);
                vibrato.connect(vibratoDepth);
                vibratoDepth.connect(fundamental.frequency);

                harmonic.type = 'sine';
                harmonic.frequency.setValueAtTime(frequency * 2, now);
                fundamentalGain.gain.setValueAtTime(1, now);
                harmonicGain.gain.setValueAtTime(0.12, now);

                fundamental.connect(fundamentalGain);
                harmonic.connect(harmonicGain);
                fundamentalGain.connect(master);
                harmonicGain.connect(master);
                master.connect(ctx.destination);

                fundamental.start(now);
                harmonic.start(now);
                vibrato.start(now);
                const stopAt = now + noteDuration + 0.01;
                fundamental.stop(stopAt);
                harmonic.stop(stopAt);
                vibrato.stop(stopAt);
                fundamental.onended = () => {
                    fundamental.disconnect();
                    harmonic.disconnect();
                    vibrato.disconnect();
                    vibratoDepth.disconnect();
                    fundamentalGain.disconnect();
                    harmonicGain.disconnect();
                    master.disconnect();
                };
            } catch (e) {
                console.error("Audio playback failed.", e);
                showAppMessage('Audio playback is unavailable. Check browser audio permissions and try again.');
            }
        }

        function handleActionClick(event) {
            const button = event.target.closest('[data-action]');
            if (!button) return;

            const { action, tab, swara, id } = button.dataset;
            switch (action) {
                case 'tab':
                    switchTab(tab);
                    break;
                case 'toggle-sidebar':
                    toggleSidebar();
                    break;
                case 'play-current':
                    playCurrentSwaraSound();
                    break;
                case 'toggle-playback':
                    togglePlayback();
                    break;
                case 'toggle-metronome':
                    toggleMetronome();
                    break;
                case 'metronome-adjust':
                    adjustMetronomeTempo(button.dataset);
                    break;
                case 'adjust-practice-tempo':
                    adjustPracticeTempo(button.dataset);
                    break;
                case 'stop-playback':
                    stopPlayback();
                    break;
                case 'add-alankar':
                    openAlankarModal();
                    break;
                case 'close-alankar':
                    closeAlankarModal();
                    break;
                case 'add-raaga':
                    openRaagaModal();
                    break;
                case 'close-raaga':
                    closeRaagaModal();
                    break;
                case 'try-swara':
                    switchTab('visualizer');
                    updateFluteDisplay(swara);
                    playCurrentSwaraSound();
                    break;
                case 'practice-alankar': {
                    const item = alankars.find(alankar => alankar.id === id);
                    if (item) {
                        loadSequence(item.name, item.type, item.sequence);
                        switchTab('visualizer');
                    }
                    break;
                }
                case 'edit-alankar':
                    openAlankarModal(id);
                    break;
                case 'delete-alankar':
                    deleteAlankar(id);
                    break;
                case 'practice-raaga': {
                    const item = raagas.find(raaga => raaga.id === id);
                    if (item) {
                        loadSequence(item.name, item.info, [...item.aarohana, ...item.avarohana]);
                        switchTab('visualizer');
                    }
                    break;
                }
                case 'edit-raaga':
                    openRaagaModal(id);
                    break;
                case 'delete-raaga':
                    deleteRaaga(id);
                    break;
                case 'sequence-note':
                    jumpToNote(Number(button.dataset.index));
                    break;
            }
        }

        function handleFormSubmit(event) {
            if (event.target.id === 'alankar-form') saveAlankar(event);
            if (event.target.id === 'raaga-form') saveRaaga(event);
        }

        function initializeApp() {
            const sidebarBreakpoint = window.matchMedia('(max-width: 767px)');
            document.body.classList.toggle('sidebar-collapsed', sidebarBreakpoint.matches);
            updateSidebarToggle();
            const syncSidebarBreakpoint = () => {
                document.body.classList.toggle('sidebar-collapsed', sidebarBreakpoint.matches);
                updateSidebarToggle();
            };
            sidebarBreakpoint.addEventListener('change', syncSidebarBreakpoint);
            window.addEventListener('resize', syncSidebarBreakpoint);
            document.addEventListener('click', handleActionClick);
            document.addEventListener('input', event => {
                if (event.target.id === 'bpm-slider') updateBPM(event.target.value);
                if (event.target.id === 'bpm-input') {
                    const sanitized = event.target.value.replace(/\D/g, '').slice(0, 3);
                    if (event.target.value !== sanitized) event.target.value = sanitized;
                    const enteredBpm = Number(sanitized);
                    if (sanitized && enteredBpm >= 20 && enteredBpm <= 300) updateBPM(enteredBpm);
                }
                if (event.target.id === 'metronome-bpm-slider') {
                    setMetronomeTempo(event.target.value);
                }
                if (event.target.id === 'alankar-search') renderAlankars();
                if (event.target.id === 'raaga-search') renderRaagas();
                if (['alankar-sequence', 'raaga-aarohana', 'raaga-avarohana'].includes(event.target.id)) {
                    event.target.setCustomValidity('');
                }
            });
            document.addEventListener('change', event => {
                if (event.target.id === 'base-pitch-select') changeBasePitch(event.target.value);
                if (event.target.id === 'alankar-filter-type') renderAlankars();
                if (event.target.id === 'bpm-input') {
                    const enteredBpm = Number(event.target.value);
                    updateBPM(event.target.value && Number.isFinite(enteredBpm)
                        ? Math.max(20, Math.min(300, Math.round(enteredBpm)))
                        : bpm);
                }
                if (event.target.id === 'metronome-bpm-input') setMetronomeTempo(event.target.value);
                if (event.target.id === 'metronome-time-signature') {
                    metronomeBeatsPerMeasure = Number(event.target.value);
                    metronomeBeatIndex %= metronomeBeatsPerMeasure;
                    renderMetronomeBeatIndicators();
                }
            });
            document.addEventListener('submit', handleFormSubmit);

            renderQuickSwaraButtons();
            renderReferenceGrid();
            renderAlankars();
            renderRaagas();
            renderMetronomeBeatIndicators();
            loadSequence(DEFAULT_ALANKARS[0].name, 'Default Practice', DEFAULT_ALANKARS[0].sequence);
            updateFluteDisplay('S');
            fetchDataFromSupabase();
        }

        document.addEventListener('DOMContentLoaded', initializeApp, { once: true });

        // NAVIGATION SWITCHER
        function switchTab(tabId) {
            document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));
            document.getElementById(`section-${tabId}`).classList.remove('hidden');

            document.querySelectorAll('.nav-tab').forEach(btn => {
                btn.classList.remove('bg-bamboo-600', 'text-white', 'shadow');
                btn.classList.add('text-stone-400', 'hover:text-stone-200');
                btn.removeAttribute('aria-current');
            });

            const activeBtn = document.getElementById(`tab-${tabId}`);
            activeBtn.classList.add('bg-bamboo-600', 'text-white', 'shadow');
            activeBtn.classList.remove('text-stone-400');
            activeBtn.setAttribute('aria-current', 'page');
            if (window.matchMedia('(max-width: 767px)').matches) {
                document.body.classList.add('sidebar-collapsed');
                updateSidebarToggle();
            }
        }

        function toggleSidebar() {
            document.body.classList.toggle('sidebar-collapsed');
            updateSidebarToggle();
        }

        function updateSidebarToggle() {
            const collapsed = document.body.classList.contains('sidebar-collapsed');
            const button = document.getElementById('sidebar-toggle');
            const icon = document.getElementById('sidebar-toggle-icon');
            document.body.classList.toggle('sidebar-open', !collapsed);
            button.setAttribute('aria-expanded', String(!collapsed));
            button.setAttribute('aria-label', collapsed ? 'Expand navigation' : 'Collapse navigation');
            icon.classList.toggle('fa-bars', collapsed);
            icon.classList.toggle('fa-xmark', !collapsed);
        }

        // FLUTE DISPLAY RENDERER
        function updateFluteDisplay(swaraKey) {
            currentSwara = swaraKey;
            const swaraObj = SWARA_DATA[swaraKey] || SWARA_DATA['S'];

            // Update Header Text
            document.getElementById('current-swara-display').textContent = swaraKey;
            const freq = basePitch * swaraObj.pitchRatio;
            document.getElementById('current-pitch-display').textContent = `${freq.toFixed(1)} Hz`;

            // Update 8 Hole Visuals
            const holes = swaraObj.holes;
            for (let i = 0; i < 8; i++) {
                const holeElem = document.getElementById(`flute-hole-${i+1}`);
                const state = holes[i];

                // Clear styling classes
                holeElem.className = "w-8 h-8 rounded-full border-2 border-stone-900 shadow-inner transition-all duration-200 relative overflow-hidden";

                if (state === 1) {
                    // Closed
                    holeElem.classList.add('bg-stone-950');
                } else if (state === 0) {
                    // Open
                    holeElem.classList.add('bg-stone-100', 'border-amber-300');
                } else if (state === 0.5) {
                    // Half-closed
                    holeElem.classList.add('bg-stone-100');
                    const halfCover = document.createElement('div');
                    halfCover.className = 'absolute top-0 bottom-0 left-0 w-1/2 bg-stone-950';
                    holeElem.replaceChildren(halfCover);
                    continue;
                }
                holeElem.replaceChildren();
            }

            // Highlight Active Quick Button
            document.querySelectorAll('.swara-quick-btn').forEach(btn => {
                if (btn.dataset.swara === swaraKey) {
                    btn.className = "swara-quick-btn px-3 py-2 rounded-xl bg-bamboo-600 text-white font-bold text-sm shadow active-swara-pulse";
                } else {
                    btn.className = "swara-quick-btn px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 hover:border-bamboo-500 font-semibold text-xs";
                }
            });
        }

        // QUICK SWARA BUTTONS
        function renderQuickSwaraButtons() {
            const container = document.getElementById('quick-swara-buttons');
            container.replaceChildren();
            Object.keys(SWARA_DATA).forEach(key => {
                const btn = document.createElement('button');
                btn.dataset.swara = key;
                btn.dataset.action = 'try-swara';
                btn.className = "swara-quick-btn px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 hover:border-bamboo-500 font-semibold text-xs";
                btn.textContent = key;
                container.appendChild(btn);
            });
        }

        function playCurrentSwaraSound() {
            const swaraObj = SWARA_DATA[currentSwara] || SWARA_DATA['S'];
            const freq = basePitch * swaraObj.pitchRatio;
            playFluteTone(freq);
        }

        // SEQUENCER & PLAYBACK
        function loadSequence(title, subtitle, sequenceArray) {
            const normalizedSequence = normalizeSwaraSequence(sequenceArray);
            if (!normalizedSequence) {
                showAppMessage('This sequence contains invalid swaras or beat counts and cannot be played.');
                console.error('Unable to load an invalid swara sequence.');
                return false;
            }
            stopPlayback();
            currentSequence = normalizedSequence;
            activeNoteIndex = 0;
            document.getElementById('player-title').textContent = title;
            document.getElementById('player-subtitle').textContent = subtitle;
            renderSequenceNotes();
            updateFluteDisplay(currentSequence[0].note);
            return true;
        }

        function renderSequenceNotes() {
            const container = document.getElementById('sequence-notes-container');
            container.replaceChildren();

            currentSequence.forEach((entry, idx) => {
                const noteCard = document.createElement('div');
                noteCard.className = `p-2.5 rounded-xl border flex flex-col items-center min-w-[50px] cursor-pointer transition-all ${
                    idx === activeNoteIndex 
                        ? 'bg-bamboo-600 border-amber-400 text-white shadow-lg scale-105' 
                        : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700'
                }`;
                noteCard.dataset.action = 'sequence-note';
                noteCard.dataset.index = idx;

                // Note Label
                const label = document.createElement('span');
                label.className = "font-black text-sm";
                label.textContent = entry.note;
                noteCard.appendChild(label);
                if (entry.beats !== 1) {
                    noteCard.appendChild(makeElement('span', 'text-[10px] text-amber-300 font-mono', `${entry.beats} beats`));
                }

                // Mini hole diagram representation
                const miniHoleContainer = document.createElement('div');
                miniHoleContainer.className = "flex gap-0.5 mt-1.5";
                const holes = (SWARA_DATA[entry.note] || SWARA_DATA['S']).holes;

                holes.forEach(h => {
                    const dot = document.createElement('span');
                    dot.className = "w-1.5 h-1.5 rounded-full inline-block";
                    if (h === 1) dot.className += " bg-stone-100";
                    else if (h === 0.5) dot.className += " bg-amber-400";
                    else dot.className += " bg-stone-800 border border-stone-600";
                    miniHoleContainer.appendChild(dot);
                });

                noteCard.appendChild(miniHoleContainer);
                container.appendChild(noteCard);
            });
        }

        function jumpToNote(index) {
            activeNoteIndex = index;
            renderSequenceNotes();
            const note = currentSequence[activeNoteIndex];
            updateFluteDisplay(note.note);
            playCurrentSwaraSound();
        }

        function togglePlayback() {
            if (isPlaying) {
                stopPlayback();
            } else {
                startPlaybackLoop();
            }
        }

        function startPlaybackLoop() {
            if (currentSequence.length === 0 || isPlaying) return;
            isPlaying = true;
            document.getElementById('play-icon').className = "fa-solid fa-pause";
            document.getElementById('play-text').textContent = "Pause";
            document.getElementById('btn-play-pause').classList.replace('bg-bamboo-600', 'bg-amber-600');

            playStep();
            scheduleNextPlaybackStep();
        }

        function scheduleNextPlaybackStep() {
            if (!isPlaying) return;
            const entry = currentSequence[activeNoteIndex];
            const delay = (60 / bpm) * entry.beats * 1000;
            playbackTimeout = setTimeout(() => {
                if (!isPlaying) return;
                if (activeNoteIndex + 1 >= currentSequence.length) {
                    if (document.getElementById('loop-toggle').checked) {
                        activeNoteIndex = 0;
                    } else {
                        stopPlayback();
                        return;
                    }
                } else {
                    activeNoteIndex++;
                }
                playStep();
                scheduleNextPlaybackStep();
            }, delay);
        }

        function playStep() {
            renderSequenceNotes();
            const entry = currentSequence[activeNoteIndex];
            updateFluteDisplay(entry.note);
            const swaraObj = SWARA_DATA[entry.note] || SWARA_DATA['S'];
            const duration = (60 / bpm) * entry.beats * 0.9;
            playFluteTone(basePitch * swaraObj.pitchRatio, duration);
        }

        function stopPlayback() {
            isPlaying = false;
            if (playbackTimeout) clearTimeout(playbackTimeout);
            playbackTimeout = null;
            document.getElementById('play-icon').className = "fa-solid fa-play";
            document.getElementById('play-text').textContent = "Play Sequence";
            const btn = document.getElementById('btn-play-pause');
            if (btn) btn.classList.replace('bg-amber-600', 'bg-bamboo-600');
        }

        function updateBPM(val) {
            bpm = Math.max(20, Math.min(300, Math.round(Number(val))));
            document.getElementById('bpm-val').textContent = bpm;
            document.getElementById('bpm-input').value = bpm;
            document.getElementById('bpm-slider').value = bpm;
            if (isPlaying) {
                stopPlayback();
                startPlaybackLoop();
            }
        }

        function changeBasePitch(val) {
            basePitch = parseFloat(val);
            updateFluteDisplay(currentSwara);
        }

        // RENDER SWARA REFERENCE TAB
        function makeElement(tagName, className, text) {
            const element = document.createElement(tagName);
            if (className) element.className = className;
            if (text !== undefined) element.textContent = text;
            return element;
        }

        function makeActionButton(action, text, className, data = {}) {
            const button = makeElement('button', className, text);
            button.type = 'button';
            button.dataset.action = action;
            Object.entries(data).forEach(([key, value]) => {
                button.dataset[key] = value;
            });
            return button;
        }

        function appendSwaraChips(container, sequence) {
            normalizeSwaraSequence(sequence)?.forEach(entry => {
                container.appendChild(makeElement(
                    'span',
                    'px-1.5 py-0.5 bg-stone-900 text-amber-400 rounded text-xs font-mono font-bold',
                    formatSwaraEntry(entry)
                ));
            });
        }

        function renderReferenceGrid() {
            const grid = document.getElementById('swara-reference-grid');
            grid.replaceChildren();

            Object.keys(SWARA_DATA).forEach(key => {
                const item = SWARA_DATA[key];
                const card = document.createElement('div');
                card.className = "bg-stone-950 border border-stone-800/80 rounded-xl p-4 flex flex-col justify-between hover:border-amber-500/50 transition-all";
                const holesContainer = makeElement('div', 'flex items-center justify-between bg-stone-900/60 p-2.5 rounded-lg border border-stone-800');

                item.holes.forEach((h, idx) => {
                    const holeGroup = makeElement('div', 'flex flex-col items-center gap-1');
                    holeGroup.appendChild(makeElement('span', 'text-[9px] text-stone-500 font-mono', String(idx + 1)));
                    const hole = makeElement('div', 'w-5 h-5 rounded-full border');
                    if (h === 1) hole.classList.add('bg-stone-950', 'border-stone-700');
                    else if (h === 0) hole.classList.add('bg-stone-100', 'border-amber-300');
                    else {
                        hole.classList.add('bg-stone-100', 'relative', 'overflow-hidden');
                        hole.appendChild(makeElement('div', 'absolute top-0 bottom-0 left-0 w-1/2 bg-stone-950'));
                    }
                    holeGroup.appendChild(hole);
                    holesContainer.appendChild(holeGroup);
                });

                const heading = makeElement('div', 'flex items-center justify-between mb-3 border-b border-stone-800 pb-2');
                const labels = makeElement('div');
                labels.appendChild(makeElement('span', 'text-lg font-black text-amber-400', key));
                labels.appendChild(makeElement('span', 'text-xs text-stone-400 block', item.name));
                const tryButton = makeActionButton('try-swara', '', 'p-2 rounded-lg bg-stone-900 hover:bg-bamboo-600 text-stone-300 hover:text-white transition-all text-xs', { swara: key });
                tryButton.title = 'Try on Flute';
                tryButton.setAttribute('aria-label', `Try ${key} on flute`);
                tryButton.appendChild(makeElement('i', 'fa-solid fa-play'));
                heading.append(labels, tryButton);

                card.append(heading, holesContainer);
                grid.appendChild(card);
            });
        }

        // ALANKARS / EXERCISES CRUD & SEARCH
        function renderAlankars() {
            const list = document.getElementById('alankars-list');
            const search = document.getElementById('alankar-search').value.toLowerCase();
            const filterType = document.getElementById('alankar-filter-type').value;

            list.replaceChildren();

            const filtered = alankars.filter(a => {
                const matchesSearch = a.name.toLowerCase().includes(search) || 
                                      a.description.toLowerCase().includes(search) ||
                                      formatSwaraSequence(a.sequence).toLowerCase().includes(search);
                const matchesType = filterType === 'ALL' || a.type === filterType;
                return matchesSearch && matchesType;
            });

            if (filtered.length === 0) {
                list.appendChild(makeElement('div', 'text-center py-8 text-stone-500 text-sm', 'No exercises found matching your search criteria.'));
                return;
            }

            filtered.forEach(item => {
                const card = document.createElement('div');
                card.className = "bg-stone-950 border border-stone-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-stone-700 transition-all";

                const details = makeElement('div', 'space-y-1 max-w-2xl');
                const titleRow = makeElement('div', 'flex items-center gap-2');
                titleRow.append(
                    makeElement('span', 'text-xs font-semibold px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800/40', item.type),
                    makeElement('h4', 'text-base font-bold text-stone-100', item.name)
                );
                details.append(titleRow, makeElement('p', 'text-xs text-stone-400', item.description));
                const preview = makeElement('div', 'pt-2 flex flex-wrap gap-1');
                appendSwaraChips(preview, item.sequence);
                details.appendChild(preview);

                const actions = makeElement('div', 'flex items-center gap-2 self-end md:self-center');
                const practiceButton = makeActionButton('practice-alankar', '', 'px-3 py-2 rounded-xl bg-bamboo-600 hover:bg-bamboo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow', { id: item.id });
                practiceButton.append(makeElement('i', 'fa-solid fa-play'), document.createTextNode(' Practice'));
                const editButton = makeActionButton('edit-alankar', '', 'p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 text-xs', { id: item.id });
                editButton.title = `Edit ${item.name}`;
                editButton.setAttribute('aria-label', `Edit ${item.name}`);
                editButton.appendChild(makeElement('i', 'fa-solid fa-pen'));
                const deleteButton = makeActionButton('delete-alankar', '', 'p-2 rounded-xl bg-stone-900 hover:bg-red-950 text-stone-400 hover:text-red-400 text-xs', { id: item.id });
                deleteButton.title = `Delete ${item.name}`;
                deleteButton.setAttribute('aria-label', `Delete ${item.name}`);
                deleteButton.appendChild(makeElement('i', 'fa-solid fa-trash'));
                actions.append(
                    practiceButton,
                    editButton,
                    deleteButton
                );
                card.append(details, actions);
                list.appendChild(card);
            });
        }

        function openAlankarModal(id = null) {
            document.getElementById('alankar-modal').classList.remove('hidden');
            if (id) {
                const item = alankars.find(a => a.id === id);
                if (!item) {
                    showAppMessage('That exercise could not be found. Refresh the exercise list and try again.');
                    closeAlankarModal();
                    return;
                }
                document.getElementById('alankar-modal-title').textContent = "Edit Alankar";
                document.getElementById('alankar-id').value = item.id;
                document.getElementById('alankar-name').value = item.name;
                document.getElementById('alankar-type').value = item.type;
                document.getElementById('alankar-desc').value = item.description;
                document.getElementById('alankar-sequence').value = formatSwaraSequence(item.sequence);
            } else {
                document.getElementById('alankar-modal-title').textContent = "Add New Alankar";
                document.getElementById('alankar-form').reset();
                document.getElementById('alankar-id').value = '';
            }
        }

        function closeAlankarModal() {
            document.getElementById('alankar-modal').classList.add('hidden');
        }

        async function saveAlankar(e) {
            e.preventDefault();
            const id = document.getElementById('alankar-id').value;
            const name = document.getElementById('alankar-name').value.trim();
            const type = document.getElementById('alankar-type').value;
            const description = document.getElementById('alankar-desc').value.trim();
            const sequence = parseSwaraSequence(document.getElementById('alankar-sequence').value, document.getElementById('alankar-sequence'));
            if (!sequence) return;
            if (!isValidText(name, 120, true) || !ALANKAR_TYPES.includes(type) || !isValidText(description, 500)) {
                showAppMessage('Enter a valid exercise name, type, and description.');
                return;
            }

            let item = { id: id || `ala_${Date.now()}`, name, type, description, sequence };
            const index = alankars.findIndex(alankar => alankar.id === id);
            if (id && index < 0) {
                showAppMessage('That exercise no longer exists. Refresh the exercise list and try again.');
                return;
            }

            try {
                const payload = {
                    name,
                    exercise_type: type,
                    description,
                    swara_sequence: formatSwaraSequence(sequence)
                };
                if (index >= 0 && alankars[index].databaseId) {
                    const { data, error } = await supabaseClient
                        .from('carnatic_alankars')
                        .update(payload)
                        .eq('id', alankars[index].databaseId)
                        .select('*')
                        .single();
                    if (error) throw error;
                    item = mapSupabaseAlankar(data);
                } else if (index < 0) {
                    if (!supabaseClient) throw new Error('Supabase is unavailable.');
                    const { data, error } = await supabaseClient
                        .from('carnatic_alankars')
                        .insert([payload])
                        .select('*')
                        .single();
                    if (error) throw error;
                    item = mapSupabaseAlankar(data);
                }
                if (!item) throw new Error('Supabase returned an invalid alankar record.');
            } catch (error) {
                console.error('Unable to save alankar to Supabase.', error);
                showAppMessage(`Could not save alankar to Supabase: ${error.message || 'Please try again.'}`);
                return;
            }

            const nextAlankars = [...alankars];
            if (index >= 0) nextAlankars[index] = item;
            else nextAlankars.push(item);
            alankars = nextAlankars;
            persistCollection('carnatic_alankars', nextAlankars, 'exercise');
            closeAlankarModal();
            renderAlankars();
        }

        async function deleteAlankar(id) {
            if (confirm("Are you sure you want to delete this exercise?")) {
                const item = alankars.find(alankar => alankar.id === id);
                if (!item) return;
                try {
                    if (item.databaseId) {
                        if (!supabaseClient) throw new Error('Supabase is unavailable.');
                        const { data, error } = await supabaseClient
                            .from('carnatic_alankars')
                            .delete()
                            .eq('id', item.databaseId)
                            .select('id')
                            .maybeSingle();
                        if (error) throw error;
                        if (!data) throw new Error('The alankar was not found in Supabase.');
                    }
                    const nextAlankars = alankars.filter(alankar => alankar.id !== id);
                    alankars = nextAlankars;
                    persistCollection('carnatic_alankars', nextAlankars, 'exercise');
                    renderAlankars();
                } catch (error) {
                    console.error('Unable to delete alankar from Supabase.', error);
                    showAppMessage(`Could not delete alankar: ${error.message || 'Please try again.'}`);
                }
            }
        }

        // RAAGAS CRUD & SEARCH
        function renderRaagas() {
            const grid = document.getElementById('raagas-grid');
            const search = document.getElementById('raaga-search').value.toLowerCase();

            grid.replaceChildren();

            const filtered = raagas.filter(r => {
                return r.name.toLowerCase().includes(search) ||
                       r.info.toLowerCase().includes(search) ||
                       formatSwaraSequence(r.aarohana).toLowerCase().includes(search) ||
                       formatSwaraSequence(r.avarohana).toLowerCase().includes(search);
            });

            if (filtered.length === 0) {
                grid.appendChild(makeElement('div', 'col-span-full text-center py-8 text-stone-500 text-sm', 'No raagas found.'));
                return;
            }

            filtered.forEach(r => {
                const card = document.createElement('div');
                card.className = "bg-stone-950 border border-stone-800 rounded-2xl p-5 flex flex-col justify-between hover:border-stone-700 transition-all space-y-4";

                const details = makeElement('div', 'space-y-2');
                const titleRow = makeElement('div', 'flex items-center justify-between');
                titleRow.append(
                    makeElement('h4', 'text-lg font-bold text-amber-400', r.name),
                    makeElement('span', 'text-xs px-2 py-0.5 bg-stone-900 border border-stone-800 text-stone-400 rounded', r.info)
                );
                details.append(titleRow, makeElement('p', 'text-xs text-stone-400', r.description));

                const scales = makeElement('div', 'space-y-2 pt-2');
                [['Aarohana (Ascending):', r.aarohana], ['Avarohana (Descending):', r.avarohana]].forEach(([label, sequence]) => {
                    const scale = makeElement('div');
                    scale.appendChild(makeElement('span', 'text-[11px] text-stone-500 font-semibold uppercase block', label));
                    const chips = makeElement('div', 'flex flex-wrap gap-1 mt-1');
                    appendSwaraChips(chips, sequence);
                    scale.appendChild(chips);
                    scales.appendChild(scale);
                });
                details.appendChild(scales);

                const footer = makeElement('div', 'flex items-center justify-between border-t border-stone-900 pt-4');
                const practiceButton = makeActionButton('practice-raaga', '', 'px-4 py-2 rounded-xl bg-bamboo-600 hover:bg-bamboo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow', { id: r.id });
                practiceButton.append(makeElement('i', 'fa-solid fa-play'), document.createTextNode(' Play Full Raaga Scale'));
                const actions = makeElement('div', 'flex items-center gap-1');
                const editButton = makeActionButton('edit-raaga', '', 'p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 text-xs', { id: r.id });
                editButton.title = `Edit ${r.name}`;
                editButton.setAttribute('aria-label', `Edit ${r.name}`);
                editButton.appendChild(makeElement('i', 'fa-solid fa-pen'));
                const deleteButton = makeActionButton('delete-raaga', '', 'p-2 rounded-xl bg-stone-900 hover:bg-red-950 text-stone-400 hover:text-red-400 text-xs', { id: r.id });
                deleteButton.title = `Delete ${r.name}`;
                deleteButton.setAttribute('aria-label', `Delete ${r.name}`);
                deleteButton.appendChild(makeElement('i', 'fa-solid fa-trash'));
                actions.append(editButton, deleteButton);
                footer.append(practiceButton, actions);
                card.append(details, footer);
                grid.appendChild(card);
            });
        }

        function openRaagaModal(id = null) {
            document.getElementById('raaga-modal').classList.remove('hidden');
            if (id) {
                const item = raagas.find(r => r.id === id);
                if (!item) {
                    showAppMessage('That raaga could not be found. Refresh the raaga list and try again.');
                    closeRaagaModal();
                    return;
                }
                document.getElementById('raaga-modal-title').textContent = "Edit Raaga";
                document.getElementById('raaga-id').value = item.id;
                document.getElementById('raaga-name').value = item.name;
                document.getElementById('raaga-info').value = item.info;
                document.getElementById('raaga-aarohana').value = formatSwaraSequence(item.aarohana);
                document.getElementById('raaga-avarohana').value = formatSwaraSequence(item.avarohana);
                document.getElementById('raaga-desc').value = item.description;
            } else {
                document.getElementById('raaga-modal-title').textContent = "Add New Raaga";
                document.getElementById('raaga-form').reset();
                document.getElementById('raaga-id').value = '';
            }
        }

        function closeRaagaModal() {
            document.getElementById('raaga-modal').classList.add('hidden');
        }

        async function saveRaaga(e) {
            e.preventDefault();
            const id = document.getElementById('raaga-id').value;
            const name = document.getElementById('raaga-name').value.trim();
            const info = document.getElementById('raaga-info').value.trim();
            const aarohana = parseSwaraSequence(document.getElementById('raaga-aarohana').value, document.getElementById('raaga-aarohana'));
            const avarohana = parseSwaraSequence(document.getElementById('raaga-avarohana').value, document.getElementById('raaga-avarohana'));
            const description = document.getElementById('raaga-desc').value.trim();
            if (!aarohana || !avarohana) return;
            if (!isValidText(name, 120, true) || !isValidText(info, 200) || !isValidText(description, 500)) {
                showAppMessage('Enter a valid raaga name, scale information, and description.');
                return;
            }

            let item = { id: id || `raa_${Date.now()}`, name, info, aarohana, avarohana, description };
            const index = raagas.findIndex(raaga => raaga.id === id);
            if (id && index < 0) {
                showAppMessage('That raaga no longer exists. Refresh the raaga list and try again.');
                return;
            }

            try {
                const payload = {
                    name,
                    scale_info: info,
                    arohana: formatSwaraSequence(aarohana),
                    avarohana: formatSwaraSequence(avarohana),
                    description
                };
                if (index >= 0 && raagas[index].databaseId) {
                    const { data, error } = await supabaseClient
                        .from('carnatic_ragas')
                        .update(payload)
                        .eq('id', raagas[index].databaseId)
                        .select('*')
                        .single();
                    if (error) throw error;
                    item = mapSupabaseRaaga(data);
                } else if (index < 0) {
                    if (!supabaseClient) throw new Error('Supabase is unavailable.');
                    const { data, error } = await supabaseClient
                        .from('carnatic_ragas')
                        .insert([payload])
                        .select('*')
                        .single();
                    if (error) throw error;
                    item = mapSupabaseRaaga(data);
                }
                if (!item) throw new Error('Supabase returned an invalid raaga record.');
            } catch (error) {
                console.error('Unable to save raaga to Supabase.', error);
                showAppMessage(`Could not save raaga to Supabase: ${error.message || 'Please try again.'}`);
                return;
            }

            const nextRaagas = [...raagas];
            if (index >= 0) nextRaagas[index] = item;
            else nextRaagas.push(item);
            raagas = nextRaagas;
            persistCollection('carnatic_raagas', nextRaagas, 'raaga');
            closeRaagaModal();
            renderRaagas();
        }

        async function deleteRaaga(id) {
            if (confirm("Are you sure you want to delete this raaga?")) {
                const item = raagas.find(raaga => raaga.id === id);
                if (!item) return;
                try {
                    if (item.databaseId) {
                        if (!supabaseClient) throw new Error('Supabase is unavailable.');
                        const { data, error } = await supabaseClient
                            .from('carnatic_ragas')
                            .delete()
                            .eq('id', item.databaseId)
                            .select('id')
                            .maybeSingle();
                        if (error) throw error;
                        if (!data) throw new Error('The raaga was not found in Supabase.');
                    }
                    const nextRaagas = raagas.filter(raaga => raaga.id !== id);
                    raagas = nextRaagas;
                    persistCollection('carnatic_raagas', nextRaagas, 'raaga');
                    renderRaagas();
                } catch (error) {
                    console.error('Unable to delete raaga from Supabase.', error);
                    showAppMessage(`Could not delete raaga: ${error.message || 'Please try again.'}`);
                }
            }
        }
