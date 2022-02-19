export class TDigest {
  constructor(delta: any, K: any, CX: any);
  discrete: boolean;
  delta: any;
  K: any;
  CX: any;
  centroids: RBTree;
  nreset: number;
  reset(): void;
  n: number;
  last_cumulate: number;
  size(): number;
  toArray(everything: any): any[];
  summary(): string;
  push(x: any, n: any): void;
  push_centroid(c: any): void;
  _cumulate(exact: any): void;
  find_nearest(x: any): any;
  _new_centroid(x: any, n: any, cumn: any): void;
  _addweight(nearest: any, x: any, n: any): void;
  _digest(x: any, n: any): void;
  bound_mean(x: any): any[];
  p_rank(x_or_xlist: any): number | number[];
  _p_rank(x: any): number;
  bound_mean_cumn(cumn: any): any[];
  percentile(p_or_plist: any): any;
  _percentile(p: any): any;
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
