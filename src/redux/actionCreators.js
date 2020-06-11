let nextTodoId = 0

export const addTodoAC = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const switchColorAC = color => ({
  type: 'SWITCH_COLOR',
  color: color.color,
  backgroundColor: color.backgroundColor,
  foreColor: color.foreColor,
  input_button_bg_color: color.input_button_bg_color,
  input_button_fore_color: color.input_button_fore_color
})

export const setVisibilityFilterAC = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodoAC = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

