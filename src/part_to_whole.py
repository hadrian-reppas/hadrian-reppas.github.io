import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib import rcParams

vax_colors = ['#e61e2e', '#6e6f70', '#1a56d9']
no_vax_colors = ['#f2a0a3', '#cfd2d4', '#adc1f0']

pop_prop = np.array([29, 42, 29])
vax_prop = np.array([60, 74, 97])

y_pos = np.array([0, 29, 71])

fig, ax = plt.subplots()

ax.spines['right'].set_visible(False)
ax.spines['top'].set_visible(False)
ax.margins(0)

rcParams['axes.titlepad'] = 20
ax.set_title('Vaccination rates by party ID')
ax.set_ylabel('percent of population')
ax.set_xlabel('percent vaccinated')

ax.barh(y_pos, 100,      pop_prop, color=no_vax_colors, align='edge')
ax.barh(y_pos, vax_prop, pop_prop, color=vax_colors,    align='edge')

labels = ['Republicans', 'Independents', 'Democrats']
patches = [mpatches.Patch(color=c, label=l) for c, l in zip(vax_colors, labels)]
ax.legend(handles=patches, loc=(1.05, 0.78))

plt.savefig('part-to-whole.png', transparent=False, dpi=300, bbox_inches='tight', facecolor='white')