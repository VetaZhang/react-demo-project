import React, { useState, useEffect, useCallback } from 'react';
import { userModel } from 'react-model-store';

export default function TestStore() {
  const user = userModel('user');

  return <div>
    <div>name {user.name}</div>
    <input type="text" onChange={(e) => {
      user.setName(e.target.value);
    }} />

    <div>age {user.age}</div>
    <input type="text" onChange={(e) => {
      user.setAge(e.target.value);
    }} />
  </div>
}