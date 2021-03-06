// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class StakeRequested extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakeRequested entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakeRequested entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakeRequested", id.toString(), this);
  }

  static load(id: string): StakeRequested | null {
    return store.get("StakeRequested", id) as StakeRequested | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get beneficiary(): Bytes {
    let value = this.get("beneficiary");
    return value.toBytes();
  }

  set beneficiary(value: Bytes) {
    this.set("beneficiary", Value.fromBytes(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasLimit(): BigInt {
    let value = this.get("gasLimit");
    return value.toBigInt();
  }

  set gasLimit(value: BigInt) {
    this.set("gasLimit", Value.fromBigInt(value));
  }

  get nonce(): BigInt {
    let value = this.get("nonce");
    return value.toBigInt();
  }

  set nonce(value: BigInt) {
    this.set("nonce", Value.fromBigInt(value));
  }

  get staker(): Bytes {
    let value = this.get("staker");
    return value.toBytes();
  }

  set staker(value: Bytes) {
    this.set("staker", Value.fromBytes(value));
  }

  get stakerProxy(): Bytes {
    let value = this.get("stakerProxy");
    return value.toBytes();
  }

  set stakerProxy(value: Bytes) {
    this.set("stakerProxy", Value.fromBytes(value));
  }

  get gateway(): Bytes {
    let value = this.get("gateway");
    return value.toBytes();
  }

  set gateway(value: Bytes) {
    this.set("gateway", Value.fromBytes(value));
  }

  get stakeRequestHash(): Bytes {
    let value = this.get("stakeRequestHash");
    return value.toBytes();
  }

  set stakeRequestHash(value: Bytes) {
    this.set("stakeRequestHash", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockHash(): Bytes {
    let value = this.get("blockHash");
    return value.toBytes();
  }

  set blockHash(value: Bytes) {
    this.set("blockHash", Value.fromBytes(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get uts(): BigInt {
    let value = this.get("uts");
    return value.toBigInt();
  }

  set uts(value: BigInt) {
    this.set("uts", Value.fromBigInt(value));
  }
}

export class StakeRevoked extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakeRevoked entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakeRevoked entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakeRevoked", id.toString(), this);
  }

  static load(id: string): StakeRevoked | null {
    return store.get("StakeRevoked", id) as StakeRevoked | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get staker(): Bytes {
    let value = this.get("staker");
    return value.toBytes();
  }

  set staker(value: Bytes) {
    this.set("staker", Value.fromBytes(value));
  }

  get stakeRequestHash(): Bytes {
    let value = this.get("stakeRequestHash");
    return value.toBytes();
  }

  set stakeRequestHash(value: Bytes) {
    this.set("stakeRequestHash", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockHash(): Bytes {
    let value = this.get("blockHash");
    return value.toBytes();
  }

  set blockHash(value: Bytes) {
    this.set("blockHash", Value.fromBytes(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get uts(): BigInt {
    let value = this.get("uts");
    return value.toBigInt();
  }

  set uts(value: BigInt) {
    this.set("uts", Value.fromBigInt(value));
  }
}

export class StakeRejected extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakeRejected entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakeRejected entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakeRejected", id.toString(), this);
  }

  static load(id: string): StakeRejected | null {
    return store.get("StakeRejected", id) as StakeRejected | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get staker(): Bytes {
    let value = this.get("staker");
    return value.toBytes();
  }

  set staker(value: Bytes) {
    this.set("staker", Value.fromBytes(value));
  }

  get stakeRequestHash(): Bytes {
    let value = this.get("stakeRequestHash");
    return value.toBytes();
  }

  set stakeRequestHash(value: Bytes) {
    this.set("stakeRequestHash", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockHash(): Bytes {
    let value = this.get("blockHash");
    return value.toBytes();
  }

  set blockHash(value: Bytes) {
    this.set("blockHash", Value.fromBytes(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get uts(): BigInt {
    let value = this.get("uts");
    return value.toBigInt();
  }

  set uts(value: BigInt) {
    this.set("uts", Value.fromBigInt(value));
  }
}
