import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseSelect from '@/components/BaseSelect.vue';

const options = [
  {
    value: '124',
    label: 'Jennifer Connelly',
  },
  {
    value: '63',
    label: 'Anthony Quinn',
  },
];

describe('BaseSelect component', () => {
  it('should mount', () => {
    const wrapper = mount(BaseSelect);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render options', async () => {
    const wrapper = mount(BaseSelect, {
      props: {
        options: options,
        modelValue: '',
        // 'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      },
    });
    expect(wrapper.props('options')).toEqual(options);
    expect(wrapper.findAll('option').at(1)?.text()).toBe(options[0].label);
    expect(wrapper.findAll('option').at(2)?.text()).toBe(options[1].label);
  })

  it('should emit an event when the value changes (test two-way binding)', async () => {
    const wrapper = mount(BaseSelect, {
      props: {
        options: options,
        modelValue: '',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      },
    });

    await wrapper.find('select').setValue(options[0].value);
    expect(wrapper.props('modelValue')).toBe(options[0].value.toString());
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy();
    expect(wrapper.emitted()['update:modelValue'].length).toBe(1);
  })
});
