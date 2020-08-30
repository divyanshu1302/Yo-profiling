import React, { Component } from 'react';
import './index.css'

export default class InputTag extends Component {
  constructor() {
    super();
  }

  removeTag = (i) => {
    const newTags = [...this.props.tags];
    newTags.splice(i, 1);
    this.props.setTags(newTags);
  }

  inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      if (this.props.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      this.props.setTags([...this.props.tags, val]);
      this.tagInput.value = null;
    } else if (e.key === 'Backspace' && !val) {
      this.removeTag(this.props.tags.length - 1);
    }
  }

  render() {
    const { tags } = this.props;

    return (
      <div className="input-tag">
        <ul className="input-tag__tags">
          {tags.map((tag, i) => (
            <li key={tag}>
              {tag}
              <button type="button" onClick={() => { this.removeTag(i); }}>+</button>
            </li>
          ))}
          <li className="input-tag__tags__input">
            <input onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} placeholder="Add a tag" />
          </li>
        </ul>
      </div>
    );
  }
}
