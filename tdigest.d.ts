export class TDigest {
  /**
   * @param {number | false} [delta]
   * @param {number} [K]
   * @param {number} [CX]
   */
  constructor(delta?: number | false, K?: number, CX?: number);
  /** @type {boolean} */
  discrete: boolean;
  /** @type {number} */
  delta: number;
  /** @type {number} */
  K: number;
  /** @type {number} */
  CX: number;
  centroids: RBTree;
  nreset: number;
  reset(): void;
  n: number;
  last_cumulate: number;
  size(): number;
  /**
   * @param {boolean} [everything]
   * @returns {{mean: number; n: number}[]}
   */
  toArray(everything?: boolean): {
    mean: number;
    n: number;
  }[];
  summary(): string;
  /**
   * @param {number | number[]} x
   * @param {number} [n]
   */
  push(x: number | number[], n?: number): void;
  /**
   * @param {{mean: number, n: number} | {mean: number, n: number}[]} c
   */
  push_centroid(
    c:
      | {
          mean: number;
          n: number;
        }
      | {
          mean: number;
          n: number;
        }[],
  ): void;
  /** @private */
  private _cumulate;
  /**
   * @param {number} x
   * @returns {any}
   */
  find_nearest(x: number): any;
  /**
   * @protected
   * @param {number} x
   * @param {number} n
   * @param {number} cumn
   */
  protected _new_centroid(x: number, n: number, cumn: number): void;
  /**
   * @protected
   * @param {{ n: number; mean: number; cumn: number; mean_cumn: number; }} nearest
   * @param {number} x
   * @param {number} n
   */
  protected _addweight(
    nearest: {
      n: number;
      mean: number;
      cumn: number;
      mean_cumn: number;
    },
    x: number,
    n: number,
  ): void;
  /**
   * @private
   * @param {number} x
   * @param {number} n
   */
  private _digest;
  /**
   * @param {number} x
   */
  bound_mean(x: number): any[];
  /**
   * @param {number | number[]} x_or_xlist
   */
  p_rank(x_or_xlist: number | number[]): number | number[];
  /**
   * @private
   * @param {number} x
   */
  private _p_rank;
  /**
   * @param {number} cumn
   */
  bound_mean_cumn(cumn: number): any[];
  /**
   * @param {number | number[]} p_or_plist
   * @returns {(number | undefined)[] | number | undefined}
   */
  percentile(
    p_or_plist: number | number[],
  ): (number | undefined)[] | number | undefined;
  /**
   * @private
   * @param {number} p
   * @returns {undefined | number}
   */
  private _percentile;
  compress(): void;
  compressing: boolean;
}
export class Digest extends TDigest {
  constructor(config?: {});
  config: {};
  mode: any;
  digest_ratio: any;
  digest_thresh: any;
  n_unique: number;
  check_continuous(): boolean;
}
import {RBTree} from 'bintrees';
