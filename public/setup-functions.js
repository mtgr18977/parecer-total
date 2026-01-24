// Setup functions for dynamically loaded content

function setupCalculators() {
  // Calculator 1: Total Frames
  const calc1Btn = document.getElementById('calc1-btn');
  const calc1Result = document.getElementById('calc1-result');
  if(calc1Btn) {
    calc1Btn.addEventListener('click', () => {
      const startup = parseInt(document.getElementById('calc1-startup').value) || 0;
      const active = parseInt(document.getElementById('calc1-active').value) || 0;
      const recovery = parseInt(document.getElementById('calc1-recovery').value) || 0;

      if(startup === 0 && active === 0 && recovery === 0) {
        alert(t('alert_fill_at_least_one'));
        return;
      }

      const total = startup + active + recovery;
      calc1Result.style.display = 'block';
      calc1Result.querySelector('div:nth-child(2)').textContent = `${total}f`;
      calc1Result.querySelector('div:nth-child(3)').textContent = `Soma: ${startup} + ${active} + ${recovery} = ${total} frames`;
    });
  }

  // Calculator 2: Punish Check
  const calc2Btn = document.getElementById('calc2-btn');
  const calc2Result = document.getElementById('calc2-result');
  if(calc2Btn) {
    calc2Btn.addEventListener('click', () => {
      const onBlock = parseInt(document.getElementById('calc2-onblock').value);
      const startup = parseInt(document.getElementById('calc2-startup').value);

      if(isNaN(onBlock) || isNaN(startup)) {
        alert(t('alert_fill_both'));
        return;
      }

      const gap = Math.abs(onBlock);
      const canPunish = startup <= gap;
      const frameWindow = gap - startup;

      calc2Result.style.display = 'block';

      if(canPunish) {
        if(frameWindow === 0) {
          calc2Result.style.background = 'rgba(254,240,138,0.1)';
          calc2Result.style.border = '1px solid rgba(254,240,138,0.3)';
          calc2Result.querySelector('div:nth-child(1)').textContent = t('calc2_result_tight');
          calc2Result.querySelector('div:nth-child(1)').style.color = '#fef08a';
          calc2Result.querySelector('div:nth-child(2)').textContent = t('calc2_result_tight_desc');
        } else {
          calc2Result.style.background = 'rgba(79,209,197,0.1)';
          calc2Result.style.border = '1px solid rgba(79,209,197,0.3)';
          calc2Result.querySelector('div:nth-child(1)').textContent = t('calc2_result_punishable');
          calc2Result.querySelector('div:nth-child(1)').style.color = '#4fd1c5';
          calc2Result.querySelector('div:nth-child(2)').textContent = t('calc2_result_punishable_desc').replace('{window}', frameWindow);
        }
      } else {
        calc2Result.style.background = 'rgba(252,165,165,0.1)';
        calc2Result.style.border = '1px solid rgba(252,165,165,0.3)';
        calc2Result.querySelector('div:nth-child(1)').textContent = t('calc2_result_not');
        calc2Result.querySelector('div:nth-child(1)').style.color = '#fca5a5';
        calc2Result.querySelector('div:nth-child(2)').textContent = t('calc2_result_not_desc').replace('{startup}', startup).replace('{gap}', gap);
      }
    });
  }

  // Calculator 3: Blockstring Gap
  const calc3Btn = document.getElementById('calc3-btn');
  const calc3Result = document.getElementById('calc3-result');
  if(calc3Btn) {
    calc3Btn.addEventListener('click', () => {
      const advantage = parseInt(document.getElementById('calc3-advantage').value);
      const startup = parseInt(document.getElementById('calc3-startup').value);

      if(isNaN(advantage) || isNaN(startup)) {
        alert(t('alert_fill_both'));
        return;
      }

      const gap = startup - advantage;
      calc3Result.style.display = 'block';
      calc3Result.querySelector('div:nth-child(2)').textContent = `${gap} frame(s)`;

      if(gap <= 0) {
        calc3Result.style.background = 'rgba(79,209,197,0.1)';
        calc3Result.style.border = '1px solid rgba(79,209,197,0.3)';
        calc3Result.querySelector('div:nth-child(2)').style.color = '#4fd1c5';
        calc3Result.querySelector('div:nth-child(3)').textContent = t('calc3_result_true');
      } else if(gap <= 2) {
        calc3Result.style.background = 'rgba(254,240,138,0.1)';
        calc3Result.style.border = '1px solid rgba(254,240,138,0.3)';
        calc3Result.querySelector('div:nth-child(2)').style.color = '#fef08a';
        calc3Result.querySelector('div:nth-child(3)').textContent = t('calc3_result_small');
      } else if(gap <= 4) {
        calc3Result.style.background = 'rgba(251,191,36,0.1)';
        calc3Result.style.border = '1px solid rgba(251,191,36,0.3)';
        calc3Result.querySelector('div:nth-child(2)').style.color = '#fbbf24';
        calc3Result.querySelector('div:nth-child(3)').textContent = t('calc3_result_moderate');
      } else {
        calc3Result.style.background = 'rgba(252,165,165,0.1)';
        calc3Result.style.border = '1px solid rgba(252,165,165,0.3)';
        calc3Result.querySelector('div:nth-child(2)').style.color = '#fca5a5';
        calc3Result.querySelector('div:nth-child(3)').textContent = t('calc3_result_large');
      }
    });
  }
}

function setupCombos() {
  const comboCharSelect = document.getElementById('combo-character-select');
  const comboDiffFilter = document.getElementById('combo-difficulty-filter');
  const comboList = document.getElementById('combo-list');
  const comboCopyAll = document.getElementById('combo-copy-all');
  let currentCombos = [];

  // Populate character dropdown
  if(typeof SF6_COMBOS !== 'undefined' && comboCharSelect) {
    Object.keys(SF6_COMBOS).sort().forEach(charKey => {
      const option = document.createElement('option');
      option.value = charKey;
      option.textContent = SF6_COMBOS[charKey].character;
      comboCharSelect.appendChild(option);
    });
  }

  function renderCombos() {
    const selectedChar = comboCharSelect.value;
    const selectedDiff = comboDiffFilter.value;

    if(!selectedChar || !SF6_COMBOS[selectedChar]) {
      comboList.innerHTML = `<div style="padding:40px;text-align:center;color:var(--muted);font-style:italic">${t('combos_empty')}</div>`;
      currentCombos = [];
      return;
    }

    const charData = SF6_COMBOS[selectedChar];
    let combos = charData.combos;

    if(selectedDiff) {
      combos = combos.filter(c => c.difficulty === selectedDiff);
    }

    currentCombos = combos;

    if(combos.length === 0) {
      comboList.innerHTML = `<div style="padding:40px;text-align:center;color:var(--muted);font-style:italic">${t('combos_no_results')}</div>`;
      return;
    }

    comboList.innerHTML = '';
    combos.forEach((combo) => {
      const card = document.createElement('div');
      card.className = 'combo-card';

      const diffClass = combo.difficulty.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

      card.innerHTML = `
        <div class="combo-header">
          <div class="combo-title">${combo.combo}</div>
          <span class="difficulty-badge ${diffClass}">${combo.difficulty}</span>
        </div>
        <div class="combo-notation">${combo.notation}</div>
        <div class="combo-info">
          <div class="combo-info-item">
            <strong>${t('combo_starter')}:</strong> ${combo.starter}
          </div>
          <div class="combo-info-item">
            <strong>${t('combo_damage')}:</strong> ${combo.damage}
          </div>
          <div class="combo-info-item">
            <strong>${t('combo_situation')}:</strong> ${combo.situation}
          </div>
        </div>
        <div class="combo-notes">${combo.notes}</div>
      `;

      card.addEventListener('click', () => {
        openComboModal(charData.character, combo);
      });

      comboList.appendChild(card);
    });
  }

  if(comboCharSelect) {
    comboCharSelect.addEventListener('change', renderCombos);
    comboDiffFilter.addEventListener('change', renderCombos);
  }

  // Initialize combo modal
  setupComboModal();

  if(comboCopyAll) {
    comboCopyAll.addEventListener('click', async () => {
      if(currentCombos.length === 0) {
        alert(t('alert_select_char'));
        return;
      }

      const selectedChar = comboCharSelect.value;
      const charName = SF6_COMBOS[selectedChar].character;

      let text = `=== COMBOS: ${charName.toUpperCase()} ===\n\n`;

      currentCombos.forEach((combo) => {
        text += `[${combo.difficulty}] ${combo.combo}\n`;
        text += `${t('combo_notation')}: ${combo.notation}\n`;
        text += `${t('combo_starter')}: ${combo.starter} | ${t('combo_damage')}: ${combo.damage} | ${combo.situation}\n`;
        text += `${combo.notes}\n\n`;
      });

      try {
        await navigator.clipboard.writeText(text);
        const original = comboCopyAll.textContent;
        comboCopyAll.textContent = t('copy_success');
        setTimeout(() => comboCopyAll.textContent = original, 1500);
      } catch(err) {
        alert(t('copy_fail'));
      }
    });
  }
}

function setupFrameData() {
  const fdFilter = document.getElementById('fd-filter');
  const fdBody = document.getElementById('fd-body');
  const fdMsg = document.getElementById('fd-message');
  const fdTableContainer = document.getElementById('fd-table-container');

  function normalize(s){return s.toLowerCase();}

  function renderFrameData(query){
    if(typeof SF6_FRAME_DATA === 'undefined') return;

    const q = normalize(query);
    fdBody.innerHTML = '';

    if(q === '') {
      fdMsg.style.display = 'block';
      fdTableContainer.style.display = 'none';
      fdMsg.textContent = t('fd_initial_msg');
      return;
    }

    const fragment = document.createDocumentFragment();
    let matchCount = 0;
    const MAX_ROWS = 100;

    for(const [char, moves] of Object.entries(SF6_FRAME_DATA)){
      const charName = char.charAt(0).toUpperCase() + char.slice(1);

      if(charName.toLowerCase().includes(q)) {
        for(const m of moves){
          if(matchCount >= MAX_ROWS) break;
          const tr = document.createElement('tr');
          tr.style.cursor = 'pointer';
          tr.style.transition = 'background 0.2s';
          tr.innerHTML = `
            <td style="padding:8px">${charName}</td>
            <td style="padding:8px">${m.name}</td>
            <td style="padding:8px">${m.input}</td>
            <td style="padding:8px">${m.startup}</td>
            <td style="padding:8px">${m.active}</td>
            <td style="padding:8px;color:${getFrameColor(m.onBlock)}">${m.onBlock}</td>
            <td style="padding:8px;color:${getFrameColor(m.onHit)}">${m.onHit}</td>
            <td style="padding:8px">${m.recovery}</td>
            <td style="padding:8px;font-size:12px;color:var(--muted)">${m.notes}</td>
          `;

          // Add click event to open modal
          tr.addEventListener('click', () => openFrameDataModal(charName, m));
          tr.addEventListener('mouseenter', () => {
            tr.style.background = 'rgba(255, 255, 255, 0.03)';
          });
          tr.addEventListener('mouseleave', () => {
            tr.style.background = 'transparent';
          });

          fragment.appendChild(tr);
          matchCount++;
        }
      }
      if(matchCount >= MAX_ROWS) break;
    }

    fdBody.appendChild(fragment);

    if(matchCount === 0){
      fdMsg.style.display = 'block';
      fdTableContainer.style.display = 'none';
      fdMsg.textContent = t('fd_no_data');
    } else {
      fdMsg.style.display = 'none';
      fdTableContainer.style.display = 'block';
    }
  }

  if(fdFilter){
    fdFilter.addEventListener('input', (e) => {
      renderFrameData(e.target.value.trim());
    });
  }

  // Initialize modal logic
  setupFrameDataModal();
}

// Helper function for frame advantage colors
function getFrameColor(val){
  if(val === '' || val === undefined) return 'inherit';
  const n = parseInt(val);
  if(isNaN(n)) return 'inherit';
  if(n > 0) return '#4fd1c5'; // Plus (Cyan)
  if(n < 0 && n >= -2) return '#e6eef6'; // Safe-ish (White/Light)
  if(n < -2) return '#fca5a5'; // Unsafe (Reddish)
  return 'inherit';
}

// Modal system for Frame Data explanations
function setupFrameDataModal() {
  const modal = document.getElementById('fd-modal');
  const modalClose = document.querySelector('.modal-close');

  if(modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if(modal) {
    modal.addEventListener('click', (e) => {
      if(e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    if(modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

function openFrameDataModal(character, move) {
  const modal = document.getElementById('fd-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalTbody = document.getElementById('modal-tbody');

  if(!modal || !modalTitle || !modalSubtitle || !modalTbody) return;

  modalTitle.textContent = `${character} — ${move.name}`;
  modalSubtitle.textContent = t('modal_fd_interpretation_detailed');

  modalTbody.innerHTML = '';

  // Build explanation rows
  const rows = [
    {
      field: t('modal_fd_field_char'),
      value: character,
      class: 'code',
      interpretation: t('modal_fd_interp_char').replace('{character}', character)
    },
    {
      field: t('modal_fd_field_move'),
      value: move.name,
      class: 'code',
      interpretation: move.notes || t('modal_fd_interp_move')
    },
    {
      field: t('modal_fd_field_input'),
      value: move.input,
      class: 'code',
      interpretation: interpretInput(move.input)
    },
    {
      field: t('modal_fd_field_startup'),
      value: move.startup,
      class: 'code hl-startup',
      interpretation: interpretStartup(move.startup)
    },
    {
      field: t('modal_fd_field_active'),
      value: move.active,
      class: 'code hl-active',
      interpretation: interpretActive(move.active)
    },
    {
      field: t('modal_fd_field_recovery'),
      value: move.recovery,
      class: 'code hl-recovery',
      interpretation: interpretRecovery(move.recovery)
    },
    {
      field: t('modal_fd_field_onblock'),
      value: move.onBlock,
      class: `code ${getFrameClass(move.onBlock)}`,
      interpretation: interpretOnBlock(move.onBlock)
    },
    {
      field: t('modal_fd_field_onhit'),
      value: move.onHit,
      class: `code ${getFrameClass(move.onHit)}`,
      interpretation: interpretOnHit(move.onHit)
    }
  ];

  if(move.notes && move.notes.trim() !== '') {
    rows.push({
      field: t('modal_fd_field_notes'),
      value: '',
      class: '',
      interpretation: move.notes,
      colspan: true
    });
  }

  rows.forEach(row => {
    const tr = document.createElement('tr');
    if(row.colspan) {
      tr.innerHTML = `
        <td>${row.field}</td>
        <td colspan="2">${row.interpretation}</td>
      `;
    } else {
      tr.innerHTML = `
        <td>${row.field}</td>
        <td class="${row.class}">${row.value}</td>
        <td>${row.interpretation}</td>
      `;
    }
    modalTbody.appendChild(tr);
  });

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function getFrameClass(val) {
  if(val === '' || val === undefined || val === 'N/A') return '';
  const n = parseInt(val);
  if(isNaN(n)) return '';
  if(n > 0) return 'hl-plus';
  if(n < 0) return 'hl-minus';
  return '';
}

function interpretInput(input) {
  const notations = {
    'QCF': 'Quarter Circle Forward (236)',
    'QCB': 'Quarter Circle Back (214)',
    'DP': 'Dragon Punch motion (623)',
    'HCF': 'Half Circle Forward (41236)',
    'HCB': 'Half Circle Back (63214)',
    '236': 'Quarter Circle Forward',
    '214': 'Quarter Circle Back',
    '623': 'Dragon Punch motion',
    'cr.': 'Crouching',
    'st.': 'Standing',
    'j.': 'Jumping',
    'LP': 'Light Punch',
    'MP': 'Medium Punch',
    'HP': 'Heavy Punch',
    'LK': 'Light Kick',
    'MK': 'Medium Kick',
    'HK': 'Heavy Kick',
    'P': 'Punch',
    'K': 'Kick',
    '5': 'Standing',
    '2': 'Crouching',
    '6': 'Forward',
    '4': 'Back'
  };

  let interpretation = `${t('modal_fd_field_input')}: ${input}`;

  for(const [key, desc] of Object.entries(notations)) {
    if(input.includes(key)) {
      interpretation += ` — ${desc}`;
      break;
    }
  }

  return interpretation;
}

function interpretStartup(startup) {
  if(!startup || startup === 'N/A') return t('not_applicable');
  const frames = parseInt(startup);
  if(isNaN(frames)) return `${t('modal_fd_field_startup')}: ${startup} frames.`;

  let speed = '';
  if(frames <= 4) speed = t('speed_extra_fast');
  else if(frames <= 6) speed = t('speed_fast');
  else if(frames <= 10) speed = t('speed_moderate');
  else if(frames <= 15) speed = t('speed_slow');
  else speed = t('speed_extra_slow');

  return t('startup_desc').replace('{frames}', frames).replace('{speed}', speed);
}

function interpretActive(active) {
  if(!active || active === 'N/A') return t('active_projectile');

  // Handle ranges like "4-6" or "18-23"
  if(typeof active === 'string' && active.includes('-')) {
    const [start, end] = active.split('-').map(x => parseInt(x.trim()));
    if(!isNaN(start) && !isNaN(end)) {
      const duration = end - start + 1;
      return t('active_desc').replace('{duration}', duration).replace('{start}', start).replace('{end}', end);
    }
  }

  const frames = parseInt(active);
  if(!isNaN(frames)) {
    return t('active_simple').replace('{frames}', frames);
  }

  return `${t('modal_fd_field_active')}: ${active}.`;
}

function interpretRecovery(recovery) {
  if(!recovery || recovery === 'N/A') return t('not_applicable');
  const frames = parseInt(recovery);
  if(isNaN(frames)) return `${t('modal_fd_field_recovery')}: ${recovery} frames.`;

  let safety = '';
  if(frames <= 10) safety = t('safety_extra_fast');
  else if(frames <= 20) safety = t('safety_moderate');
  else if(frames <= 30) safety = t('safety_slow');
  else safety = t('safety_extra_slow');

  return t('recovery_desc').replace('{frames}', frames).replace('{safety}', safety);
}

function interpretOnBlock(onBlock) {
  if(!onBlock || onBlock === 'N/A' || onBlock === '—') {
    return t('onblock_knockdown');
  }

  const frames = parseInt(onBlock);
  if(isNaN(frames)) return `On Block: ${onBlock}.`;

  if(frames > 0) {
    return t('onblock_plus').replace('{frames}', frames);
  } else if(frames === 0) {
    return t('onblock_neutral');
  } else {
    const abs = Math.abs(frames);
    if(abs <= 2) {
      return t('onblock_safe').replace('{frames}', frames);
    } else if(abs <= 6) {
      return t('onblock_unsafe').replace('{frames}', frames);
    } else {
      return t('onblock_punishable').replace('{frames}', frames);
    }
  }
}

function interpretOnHit(onHit) {
  if(!onHit || onHit === 'N/A' || onHit === '—') {
    return t('onhit_knockdown');
  }

  const frames = parseInt(onHit);
  if(isNaN(frames)) return `On Hit: ${onHit}.`;

  if(frames > 0) {
    if(frames >= 10) {
      return t('onhit_huge').replace('{frames}', frames);
    } else {
      return t('onhit_plus').replace('{frames}', frames);
    }
  } else if(frames === 0) {
    return t('onhit_neutral');
  } else {
    return t('onhit_minus').replace('{frames}', frames);
  }
}

function setupGlossary() {
  const search = document.getElementById('search');
  const clear = document.getElementById('clear');
  const onlyCore = document.getElementById('onlyCore');
  const terms = Array.from(document.querySelectorAll('.term'));

  function normalize(s){return s.toLowerCase();}

  function applyGlossaryFilter(){
    const q = normalize(search.value.trim());
    const core = onlyCore.checked;
    terms.forEach(t => {
      const text = normalize(t.getAttribute('data-term') + ' ' + t.innerText);
      const isCore = t.getAttribute('data-core') === 'true';
      const matchesQ = q === '' || text.indexOf(q) !== -1;
      const matchesCore = !core || isCore;
      t.style.display = (matchesQ && matchesCore) ? 'flex' : 'none';
    });
  }

  if(search) {
    search.addEventListener('input', applyGlossaryFilter);
  }
  if(clear) {
    clear.addEventListener('click', ()=>{search.value=''; applyGlossaryFilter(); search.focus();});
  }
  if(onlyCore) {
    onlyCore.addEventListener('change', applyGlossaryFilter);
  }

  // Copy buttons
  document.querySelectorAll('button.copy').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const text = btn.getAttribute('data-copy') || t('copy_success');
      try{
        await navigator.clipboard.writeText(text);
        const original = btn.textContent;
        btn.textContent = '✔';
        setTimeout(()=>btn.textContent=original,800);
      }catch(err){
        alert(t('copy_fail'));
      }
    });
  });
}

// Modal system for Combo details
function setupComboModal() {
  const modal = document.getElementById('combo-modal');
  const modalClose = document.querySelector('.modal-close-combo');

  if(modalClose) {
    modalClose.addEventListener('click', closeComboModal);
  }

  if(modal) {
    modal.addEventListener('click', (e) => {
      if(e.target === modal) closeComboModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeComboModal();
    }
  });

  function closeComboModal() {
    if(modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

function openComboModal(character, combo) {
  const modal = document.getElementById('combo-modal');
  const modalTitle = document.getElementById('combo-modal-title');
  const modalSubtitle = document.getElementById('combo-modal-subtitle');
  const modalTbody = document.getElementById('combo-modal-tbody');

  if(!modal || !modalTitle || !modalSubtitle || !modalTbody) return;

  modalTitle.textContent = `${character} — ${combo.combo}`;
  modalSubtitle.textContent = `${t('combo_full')} — ${combo.difficulty}`;

  modalTbody.innerHTML = '';

  // Build explanation rows
  const rows = [
    {
      field: t('modal_fd_field_char'),
      value: character,
      class: 'code',
      interpretation: t('modal_fd_interp_char').replace('{character}', character)
    },
    {
      field: t('combo_difficulty'),
      value: combo.difficulty,
      class: 'code',
      interpretation: getDifficultyInterpretation(combo.difficulty)
    },
    {
      field: t('combo_full'),
      value: combo.combo,
      class: 'code',
      interpretation: currentLang === 'pt-BR' ? 'Sequência completa do combo.' : 'Complete combo sequence.'
    },
    {
      field: t('combo_notation'),
      value: combo.notation,
      class: 'code hl-active',
      interpretation: currentLang === 'pt-BR' ? 'Notação numérica para entrada dos comandos.' : 'Numeric notation for command inputs.'
    },
    {
      field: t('combo_starter'),
      value: combo.starter,
      class: 'code',
      interpretation: `${currentLang === 'pt-BR' ? 'Golpe inicial' : 'Starter move'}: ${combo.starter}`
    },
    {
      field: t('combo_damage'),
      value: combo.damage,
      class: 'code hl-plus',
      interpretation: currentLang === 'pt-BR' ? 'Dano estimado do combo completo.' : 'Estimated damage of the complete combo.'
    },
    {
      field: t('combo_situation'),
      value: combo.situation,
      class: 'code',
      interpretation: getSituationInterpretation(combo.situation)
    },
    {
      field: t('combo_notes'),
      value: '',
      class: '',
      interpretation: combo.notes,
      colspan: true
    }
  ];

  rows.forEach(row => {
    const tr = document.createElement('tr');
    if(row.colspan) {
      tr.innerHTML = `
        <td>${row.field}</td>
        <td colspan="2">${row.interpretation}</td>
      `;
    } else {
      tr.innerHTML = `
        <td>${row.field}</td>
        <td class="${row.class}">${row.value}</td>
        <td>${row.interpretation}</td>
      `;
    }
    modalTbody.appendChild(tr);
  });

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function getDifficultyInterpretation(difficulty) {
  if (difficulty === 'Básico' || difficulty === 'Basic') return t('diff_basic_desc');
  if (difficulty === 'Intermediário' || difficulty === 'Intermediate') return t('diff_inter_desc');
  if (difficulty === 'Avançado' || difficulty === 'Advanced') return t('diff_adv_desc');
  return t('combo_difficulty');
}

function getSituationInterpretation(situation) {
  const map = {
    'Neutro': 'sit_neutral',
    'Neutral': 'sit_neutral',
    'Close range': 'sit_close',
    'Drive Rush': 'sit_dr',
    'Punish Counter': 'sit_pc',
    'Counter Hit': 'sit_ch',
    'Anti-air': 'sit_aa',
    'Corner': 'sit_corner',
    'Corner combo': 'sit_corner',
    'Mix-up': 'sit_mixup',
    'Okizeme': 'sit_okizeme',
    'Corner throw': 'sit_corner',
    'Corner okizeme': 'sit_okizeme',
    'Portal setup': 'sit_neutral',
    'Command grab': 'sit_close',
    'Release pressure': 'sit_close',
    'Air approach': 'sit_neutral',
    'Full resources': 'sit_neutral',
    'Corner install': 'sit_corner',
    'Jump-in': 'sit_neutral'
  };
  const key = map[situation];
  return key ? t(key) : `${t('combo_situation')}: ${situation}`;
}

function setupMatchupHelper() {
  const char1Select = document.getElementById('matchup-char1');
  const char2Select = document.getElementById('matchup-char2');
  const resultDiv = document.getElementById('matchup-result');
  const emptyDiv = document.getElementById('matchup-empty');

  // Populate character dropdowns
  if(typeof getAvailableCharacters === 'function') {
    const characters = getAvailableCharacters();
    characters.forEach(char => {
      const option1 = document.createElement('option');
      option1.value = char.toLowerCase();
      option1.textContent = char;
      char1Select.appendChild(option1);

      const option2 = document.createElement('option');
      option2.value = char.toLowerCase();
      option2.textContent = char;
      char2Select.appendChild(option2);
    });
  }

  function updateMatchup() {
    const char1 = char1Select.value;
    const char2 = char2Select.value;

    if(!char1 || !char2) {
      resultDiv.style.display = 'none';
      emptyDiv.style.display = 'block';
      return;
    }

    if(char1 === char2) {
      emptyDiv.textContent = t('matchup_same_char');
      emptyDiv.style.display = 'block';
      resultDiv.style.display = 'none';
      return;
    }

    // Get matchup data
    const matchup = getMatchupData(char1, char2);

    // Update UI
    document.getElementById('matchup-title').textContent =
      `${char1.charAt(0).toUpperCase() + char1.slice(1)} vs ${char2.charAt(0).toUpperCase() + char2.slice(1)}`;

    document.getElementById('matchup-rating').textContent = matchup.rating;

    const diffBadge = document.getElementById('matchup-difficulty-badge');
    diffBadge.textContent = matchup.difficulty;
    diffBadge.className = 'badge';

    // Color code difficulty
    if(matchup.difficulty === 'Advantage') {
      diffBadge.style.background = 'rgba(74, 222, 128, 0.15)';
      diffBadge.style.color = '#4ade80';
      diffBadge.style.border = '1px solid rgba(74, 222, 128, 0.3)';
    } else if(matchup.difficulty === 'Disadvantage') {
      diffBadge.style.background = 'rgba(239, 68, 68, 0.15)';
      diffBadge.style.color = '#ef4444';
      diffBadge.style.border = '1px solid rgba(239, 68, 68, 0.3)';
    } else {
      diffBadge.style.background = 'rgba(251, 191, 36, 0.15)';
      diffBadge.style.color = '#fbbf24';
      diffBadge.style.border = '1px solid rgba(251, 191, 36, 0.3)';
    }

    // Populate lists
    const keyPointsList = document.getElementById('matchup-key-points');
    keyPointsList.innerHTML = matchup.keyPoints.map(point => `<li>${point}</li>`).join('');

    const tipsList = document.getElementById('matchup-tips');
    tipsList.innerHTML = matchup.tips.map(tip => `<li>${tip}</li>`).join('');

    const dangerousList = document.getElementById('matchup-dangerous');
    dangerousList.innerHTML = matchup.dangerousMoves.map(move => `<li>${move}</li>`).join('');

    const toolsList = document.getElementById('matchup-tools');
    toolsList.innerHTML = matchup.yourTools.map(tool => `<li>${tool}</li>`).join('');

    // Show result
    emptyDiv.style.display = 'none';
    resultDiv.style.display = 'block';

    // Smooth scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  if(char1Select) {
    char1Select.addEventListener('change', updateMatchup);
  }
  if(char2Select) {
    char2Select.addEventListener('change', updateMatchup);
  }
}
